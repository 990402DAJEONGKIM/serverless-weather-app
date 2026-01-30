import requests
import json
import boto3
import pymysql
import os
from datetime import datetime

# 환경 변수에서 설정 가져오기
AUTH_KEY = os.environ.get("AUTH_KEY")
API_URL = "https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstMsgService/getLandFcst"
S3_BUCKET = os.environ.get("S3_BUCKET")
AWS_ACCESS_KEY = os.environ.get("MY_AWS_ACCESS_KEY")
AWS_SECRET_KEY = os.environ.get("MY_AWS_SECRET_KEY")
DB_HOST = os.environ.get("DB_HOST")
DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")
DB_NAME = os.environ.get("DB_NAME")

def fetch_weather_data(reg_id):
    params = {
        "pageNo": 1,
        "numOfRows": 2,
        "dataType": "JSON",
        "regId": reg_id,
        "authKey": AUTH_KEY
    }
    print("Params:", params)  # 여기 추가
    response = requests.get(API_URL, params=params)
    print(f"Response status: {response.status_code}")
    print("Response text:", response.text)  # 여기 추가
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
        # 뷰에서 regid, region_name, lat, lon 가져옴
        cursor.execute("SELECT regid, region_name, lat, lon FROM weather.region_view")
        regions = cursor.fetchall()
        conn.close()
        return regions  # [(regid, region_name, lat, lon), ...]
    except pymysql.Error as e:
        print(f"RDS 오류 (region_view): {e}")
        return []

def process_region_data(reg_id, region_name, lat, lon):
    data = fetch_weather_data(reg_id)
    if not data:
        return None
    
    print("Data:", data)  # 디버깅 추가

    items = data["response"]["body"]["items"]["item"]
    print("Items:", items)  # 여기 추가
    if not isinstance(items, list):
        items = [items]
    
    # numEf가 1인 항목만 필터링
    filtered_items = [item for item in items if item.get("numEf") == 1]
    print("Filtered items:", len(filtered_items))  # 디버깅 추가
    if not filtered_items:
        return None
    
    
    # 위도/경도 및 지역 이름 추가
    for item in filtered_items:
        item["region_name"] = region_name
        item["latitude"] = lat
        item["longitude"] = lon
    
    return filtered_items

def determine_file_key(first_announce_time):
    print(f"S3_BUCKET: '{S3_BUCKET}'")
    print(f"determine_file_key 호출: {first_announce_time}")
    s3 = boto3.client("s3")
    base_key = f"weather_data/{first_announce_time}.json"
    s3_key = base_key
    version = 1
    while True:
        try:
            print(f"Checking key: {s3_key}")
            s3.head_object(Bucket=S3_BUCKET, Key=s3_key)
            s3_key = f"weather_data/{first_announce_time}({version}).json"
            version += 1
        except s3.exceptions.ClientError as e:
            if e.response['Error']['Code'] == '404':
                print(f"Key available: {s3_key}")
                break
            else:
                print(f"S3 error: {e}")
                raise
    return s3_key

def collect_data_by_time(regions):
    temp_file = None
    fixed_s3_key = None
    total = len(regions)
    batch_size = 10
    for i, (regid, region_name, lat, lon) in enumerate(regions):
        print(f"{i+1}/{total} 처리 중: {regid}, {region_name}")
        filtered_items = process_region_data(regid, region_name, lat, lon)
        if filtered_items:
            announce_time = filtered_items[0].get("announceTime", "unknown")
            print(f"announce_time: {announce_time}")
            if fixed_s3_key is None:
                fixed_s3_key = determine_file_key(announce_time)
                temp_file = f"/tmp/temp_{announce_time}.json"
                print(f"temp_file 설정: {temp_file}")
            # 로컬 파일에 append
            with open(temp_file, "a") as f:
                for item in filtered_items:
                    json.dump(item, f)
                    f.write("\n")
            print(f"파일에 {len(filtered_items)}개 항목 쓰기 완료")
        
        # 10개마다 중간 저장 표시
        if (i + 1) % batch_size == 0:
            print(f"중간 저장: {temp_file} 업데이트됨")
    
    return temp_file, fixed_s3_key

def save_to_s3_grouped(temp_file, s3_key):
    print(f"save_to_s3_grouped 호출: temp_file={temp_file}, s3_key={s3_key}")
    if not temp_file or not os.path.exists(temp_file):
        print("temp_file 없음")
        return
    
    with open(temp_file, "r") as f:
        lines = f.readlines()
        items = [json.loads(line.strip()) for line in lines if line.strip()]
    
    print(f"총 {len(items)}개 항목 로드")
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
    
    s3 = boto3.client("s3")
    json_data = json.dumps(filtered_data, ensure_ascii=False, indent=4)
    try:
        s3.put_object(Bucket=S3_BUCKET, Key=s3_key, Body=json_data.encode('utf-8'))
        print(f"S3에 저장 완료: {s3_key} (총 {len(items)}개 지역)")
    except Exception as e:
        print(f"S3 업로드 실패: {e}")
    
    os.remove(temp_file)
    print("temp_file 삭제 완료")

def lambda_handler(event, context):
    print("Lambda 함수 시작")
    try:
        regions = get_regions_from_db()
        print(f"Regions 수: {len(regions)}")
        if not regions:
            return {"statusCode": 400, "body": "regions 데이터 없음"}
        
        temp_file, s3_key = collect_data_by_time(regions)
        print("collect_data_by_time 완료")
        save_to_s3_grouped(temp_file, s3_key)
        print("save_to_s3_grouped 완료")
        return {"statusCode": 200, "body": "모든 데이터 처리 완료"}
    except Exception as e:
        print(f"에러 발생: {e}")
        return {"statusCode": 500, "body": str(e)}