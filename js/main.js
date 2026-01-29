// 1. 지역별 데이터 (나중에 API 연동 가능)
const weatherData = [
    { city: "Chicago, IL", temp: 72, status: "SUNNY" },
    { city: "Seoul, KR", temp: 65, status: "CLEAR" },
    { city: "London, UK", temp: 58, status: "CLOUDY" },
    { city: "Tokyo, JP", temp: 70, status: "PARTLY CLOUDY" },
    { city: "Sydney, AU", temp: 78, status: "SUNNY" }
];

// 2. 요소 선택
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const locationList = document.getElementById('location-list');
const unitBtn = document.getElementById('unit-btn');

const cityTxt = document.getElementById('city');
const tempTxt = document.getElementById('temp');
const statusTxt = document.getElementById('status');

// 3. 사이드바 제어 함수
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 4. 지역 선택 및 데이터 업데이트
function updateWeather(data) {
    cityTxt.innerText = data.city;
    tempTxt.innerText = data.temp;
    statusTxt.innerText = data.status;
    toggleSidebar(); // 업데이트 후 사이드바 닫기
}

// 5. 지역 목록 동적 생성
function initLocationList() {
    weatherData.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.city;
        li.addEventListener('click', () => updateWeather(item));
        locationList.appendChild(li);
    });
}

// 6. 온도 단위 변경 (간단 구현)
unitBtn.addEventListener('click', () => {
    let currentTemp = parseInt(tempTxt.innerText);
    if (unitBtn.innerText === "°F") {
        unitBtn.innerText = "°C";
        tempTxt.innerText = Math.round((currentTemp - 32) * 5 / 9);
    } else {
        unitBtn.innerText = "°F";
        tempTxt.innerText = Math.round((currentTemp * 9 / 5) + 32);
    }
});

// 이벤트 바인딩
menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// 초기화
initLocationList();


// 페이지 로드 시 바로 위치 요청
    navigator.geolocation.getCurrentPosition(function(position) {
        alert("위치 획득 성공! 위도: " + position.coords.latitude + ", 경도: " + position.coords.longitude);
    }, function(error) {
        alert("위치 획득 실패: " + error.message);
    });


// 1. S3 JSON 파일의 URL (실제 본인의 S3 주소로 변경하세요)
const S3_URL = "https://weater-project-s3-bucket-01.s3.ap-northeast-2.amazonaws.com/weather_data/11B10101_20260129154522.json";

// 2. 데이터를 가져와서 화면에 뿌려주는 함수
async function fetchS3WeatherData() {
    try {
        const response = await fetch(S3_URL);
        if (!response.ok) throw new Error("네트워크 응답에 문제가 있습니다.");
        
        const data = await response.json();

        // JSON 구조에 맞춰 'ta' 값 추출 (ta: "-12")
        const temperature = data.response.body.items.item[0].ta;

        // HTML의 id="temp"인 요소에 값 넣기
        const tempTxt = document.getElementById('temp');
        if (tempTxt) {
            tempTxt.innerText = temperature;
        }

        console.log("S3 온도 데이터 반영 성공:", temperature);
    } catch (error) {
        console.error("데이터를 불러오는 중 에러 발생:", error);
    }
}

// 3. 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', () => {
    fetchS3WeatherData();
});