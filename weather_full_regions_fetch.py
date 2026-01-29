import requests
import json
import boto3
import pymysql
import os
from datetime import datetime
from config import AUTH_KEY, API_URL, S3_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_KEY, DB_HOST, DB_USER, DB_PASS, DB_NAME

def fetch_weather_data(reg_id):
    params = {
        "pageNo": 1,
        "numOfRows": 2,
        "dataType": "JSON",
        "regId": reg_id,
        "authKey": AUTH_KEY
    }
    response = requests.get(API_URL, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"API 요청 실패: {response.status_code}")
        return None

def get_regions_from_db():
    try:
        conn = pymysql.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASS,
            db=DB_NAME
        )
        cursor = conn.cursor()
        cursor.execute("SELECT regid, region_name FROM regions")
        regions = cursor.fetchall()
        conn.close()
        return regions  # [(regid, region_name), ...]
    except pymysql.Error as e:
        print(f"RDS 오류 (regions): {e}")
        return []

def get_lat_lon_from_db(reg_id):
    try:
        conn = pymysql.connect(
            host=DB_HOST,
            user=DB_USER,
            password=DB_PASS,
            db=DB_NAME
        )
        cursor = conn.cursor()
        cursor.execute("SELECT lat, lon FROM region_coordinates WHERE regid = %s", (reg_id,))
        result = cursor.fetchone()
        conn.close()
        return result if result else (None, None)
    except pymysql.Error as e:
        print(f"DB 좌표 오류 (region_coordinates): {e}")
        return (None, None)

def process_region_data(reg_id):
    data = fetch_weather_data(reg_id)
    if not data:
        return None
    
    items = data["response"]["body"]["items"]["item"]
    if not isinstance(items, list):
        items = [items]
    
    # numEf가 1인 항목만 필터링
    filtered_items = [item for item in items if item.get("numEf") == 1]
    if not filtered_items:
        return None
    
    # 위도/경도 추가
    lat, lon = get_lat_lon_from_db(reg_id)
    for item in filtered_items:
        item["latitude"] = lat
        item["longitude"] = lon
    
    return filtered_items

def determine_file_key(first_announce_time):
    s3 = boto3.client("s3", aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY)
    base_key = f"weather_data/{first_announce_time}.json"
    s3_key = base_key
    version = 1
    while True:
        try:
            s3.head_object(Bucket=S3_BUCKET, Key=s3_key)
            s3_key = f"weather_data/{first_announce_time}({version}).json"
            version += 1
        except s3.exceptions.ClientError as e:
            if e.response['Error']['Code'] == '404':
                break
            else:
                raise
    return s3_key

def collect_data_by_time(regions):
    temp_file = None
    fixed_s3_key = None
    total = len(regions)
    batch_size = 10
    for i, (regid, region_name) in enumerate(regions):
        print(f"{i+1}/{total} 처리 중: {regid}, {region_name}")
        filtered_items = process_region_data(regid)
        if filtered_items:
            announce_time = filtered_items[0].get("announceTime", "unknown")
            if fixed_s3_key is None:
                fixed_s3_key = determine_file_key(announce_time)
                temp_file = f"temp_{announce_time}.json"
            # 로컬 파일에 append
            with open(temp_file, "a") as f:
                for item in filtered_items:
                    json.dump(item, f)
                    f.write("\n")
        
        # 10개마다 중간 저장 표시
        if (i + 1) % batch_size == 0:
            print(f"중간 저장: {temp_file} 업데이트됨")
    
    return temp_file, fixed_s3_key

def save_to_s3_grouped(temp_file, s3_key):
    if not temp_file or not os.path.exists(temp_file):
        return
    
    with open(temp_file, "r") as f:
        lines = f.readlines()
        items = [json.loads(line.strip()) for line in lines if line.strip()]
    
    # JSON 구조 생성
    filtered_data = {
        "response": {
            "header": {"resultCode": "00", "resultMsg": "NORMAL_SERVICE"},
            "body": {
                "dataType": "JSON",
                "items": {"item": items},
                "pageNo": 1,
                "numOfRows": len(items),
                "totalCount": len(items)
            }
        }
    }
    
    s3 = boto3.client("s3", aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY)
    json_data = json.dumps(filtered_data, ensure_ascii=False, indent=4)
    try:
        s3.put_object(Bucket=S3_BUCKET, Key=s3_key, Body=json_data.encode('utf-8'))
        print(f"S3에 저장 완료: {s3_key} (총 {len(items)}개 지역)")
    except Exception as e:
        print(f"S3 업로드 실패: {e}")
    
    os.remove(temp_file)

# 메인 실행
try:
    regions = get_regions_from_db()
    if not regions:
        print("regions 데이터 없음")
        exit()
    
    temp_file, s3_key = collect_data_by_time(regions)
    save_to_s3_grouped(temp_file, s3_key)
    print("모든 데이터 처리 완료")
except KeyboardInterrupt:
    print("프로그램 중단")