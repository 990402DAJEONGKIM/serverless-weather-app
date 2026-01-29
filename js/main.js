const weatherData = {
    'Chicago, IL': {
        tempF: 72, tempC: 22, status: 'SUNNY', icon: 'sun'
    },
    'New York, NY': {
        tempF: 55, tempC: 13, status: 'CLOUDY', icon: 'cloud'
    },
    'Los Angeles, CA': {
        tempF: 80, tempC: 27, status: 'CLEAR', icon: 'sun'
    },
    'London, UK': {
        tempF: 45, tempC: 7, status: 'RAINY', icon: 'rain'
    },
    'Tokyo, JP': {
        tempF: 68, tempC: 20, status: 'PARTLY CLOUDY', icon: 'partly-cloudy'
    }
};

let currentLocation = 'Chicago, IL';
let isFahrenheit = true;

// DOM 요소 캐싱
const cityElement = document.getElementById('city');
const dateElement = document.getElementById('date');
const tempElement = document.getElementById('temp');
const statusElement = document.getElementById('status');
const unitBtn = document.getElementById('unit-btn');
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const locationList = document.getElementById('location-list');
const overlay = document.getElementById('overlay');
const weatherDisplayIcon = document.getElementById('weather-display-icon');

// 날짜 업데이트 함수
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options).toUpperCase();
    dateElement.innerText = dateString;
}

// 날씨 정보 업데이트 함수
function updateWeatherDisplay(location) {
    const data = weatherData[location];
    if (!data) {
        console.error('Weather data not found for:', location);
        return;
    }

    cityElement.innerText = location;
    statusElement.innerText = data.status;

    if (isFahrenheit) {
        tempElement.innerText = data.tempF;
        unitBtn.innerText = '°F';
    } else {
        tempElement.innerText = data.tempC;
        unitBtn.innerText = '°C';
    }

    // 날씨 아이콘 클래스 변경
    weatherDisplayIcon.className = ''; // 기존 클래스 제거
    weatherDisplayIcon.classList.add(data.icon); // 새 아이콘 클래스 추가
    // TODO: 실제로 아이콘이 변경되려면 CSS에서 각 날씨에 맞는 아이콘 스타일을 정의해야 합니다.
    // 예: .cloud, .rain 등의 CSS 스타일 추가
}

// 사이드바 열기/닫기 함수
function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 초기화 함수
window.onload = () => {
    updateDate();
    updateWeatherDisplay(currentLocation); // 초기 날씨 표시

    // 온도 단위 변경 버튼 이벤트
    unitBtn.addEventListener('click', function() {
        isFahrenheit = !isFahrenheit;
        updateWeatherDisplay(currentLocation);
    });

    // 햄버거 메뉴 버튼 이벤트
    menuBtn.addEventListener('click', toggleSidebar);

    // 사이드바 닫기 버튼 이벤트
    closeSidebarBtn.addEventListener('click', toggleSidebar);

    // 오버레이 클릭 시 사이드바 닫기
    overlay.addEventListener('click', toggleSidebar);

    // 지역 목록 생성 및 이벤트 할당
    for (const location in weatherData) {
        const listItem = document.createElement('li');
        listItem.innerText = location;
        listItem.addEventListener('click', () => {
            currentLocation = location;
            updateWeatherDisplay(currentLocation);
            toggleSidebar(); // 지역 선택 후 사이드바 닫기
        });
        locationList.appendChild(listItem);
    }
};