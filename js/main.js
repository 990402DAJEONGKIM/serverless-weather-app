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




// 3. 페이지 로드 시 실행
window.addEventListener('DOMContentLoaded', () => {
    fetchS3WeatherData();
});


async function fetchS3WeatherData() {
    const S3_URL = "https://weater-project-s3-bucket-01.s3.ap-northeast-2.amazonaws.com/weather_data/11B10101_20260129154522.json"; // 본인의 S3 주소

    try {
        const response = await fetch(S3_URL);
        const data = await response.json();

        // 1. item 배열 중에서 numEf가 3인 객체를 찾습니다.
        const itemArray = data.response.body.items.item;
        const targetItem = itemArray.find(i => i.numEf === 3);

        // 2. 데이터를 찾았는지 확인 후 화면에 반영합니다.
        if (targetItem) {
            console.log("찾은 데이터:", targetItem);
            
            // numEf가 3인 데이터의 ta(-12 등)를 가져와서 HTML에 넣기
            document.getElementById('temp').innerText = targetItem.ta;
            
            // 날씨 상태(wf)도 함께 업데이트
            document.getElementById('status').innerText = targetItem.wf;
        } else {
            console.warn("numEf가 3인 데이터를 찾을 수 없습니다.");
        }

    } catch (error) {
        console.error("데이터 로드 중 에러:", error);
    }
}

//주석테스트