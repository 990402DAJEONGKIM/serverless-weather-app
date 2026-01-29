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