# filepath: c:\Users\admin\Desktop\Weather_Project\config.py
import os
from dotenv import load_dotenv

load_dotenv()  # .env 파일 로드

AUTH_KEY = os.environ.get("AUTH_KEY")
API_URL = "https://apihub.kma.go.kr/api/typ02/openApi/VilageFcstMsgService/getLandFcst"
S3_BUCKET = os.environ.get("S3_BUCKET")
AWS_ACCESS_KEY = os.environ.get("AWS_ACCESS_KEY")
AWS_SECRET_KEY = os.environ.get("AWS_SECRET_KEY")

# DB 설정 추가
DB_HOST = os.environ.get("DB_HOST")
DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")
DB_NAME = os.environ.get("DB_NAME")
