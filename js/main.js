// 1. icon.html의 원본 SVG 애니메이션 데이터 통합 및 스타일 유지
const iconTemplates = {
    "맑음": `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 44.9 44.9" style="enable-background:new 0 0 44.9 44.9;" xml:space="preserve" height="40px" width="40px">
            <g id="Sun">
                <circle class="yellow" cx="22.4" cy="22.6" r="11" fill="#FCD440"/>
                <g>
                    <path class="yellow" d="M22.6,8.1h-0.3c-0.3,0-0.6-0.3-0.6-0.6v-7c0-0.3,0.3-0.6,0.6-0.6l0.3,0c0.3,0,0.6,0.3,0.6,0.6v7C23.2,7.8,22.9,8.1,22.6,8.1z" fill="#FCD440"/>
                    <path class="yellow" d="M22.6,36.8h-0.3c-0.3,0-0.6,0.3-0.6,0.6v7c0,0.3,0.3,0.6,0.6,0.6h0.3c0.3,0,0.6-0.3,0.6-0.6v-7C23.2,37,22.9,36.8,22.6,36.8z" fill="#FCD440"/>
                    <path class="yellow" d="M8.1,22.3v0.3c0,0.3-0.3,0.6-0.6,0.6h-7c-0.3,0-0.6-0.3-0.6-0.6l0-0.3c0-0.3,0.3-0.6,0.6-0.6h7C7.8,21.7,8.1,21.9,8.1,22.3z" fill="#FCD440"/>
                    <path class="yellow" d="M36.8,22.3v0.3c0,0.3,0.3,0.6,0.6,0.6h7c0.3,0,0.6-0.3,0.6-0.6v-0.3c0-0.3-0.3-0.6-0.6-0.6h-7C37,21.7,36.8,21.9,36.8,22.3z" fill="#FCD440"/>
                    <path class="yellow" d="M11.4,31.6l0.2,0.3c0.2,0.2,0.2,0.6-0.1,0.8l-5.3,4.5c-0.2,0.2-0.6,0.2-0.8-0.1l-0.2-0.3c-0.2-0.2-0.2-0.6,0.1-0.8l5.3-4.5C10.9,31.4,11.2,31.4,11.4,31.6z" fill="#FCD440"/>
                    <path class="yellow" d="M33.2,13l0.2,0.3c0.2,0.2,0.6,0.3,0.8,0.1l5.3-4.5c0.2-0.2,0.3-0.6,0.1-0.8l-0.2-0.3c-0.2-0.2-0.6-0.3-0.8-0.1l-5.3,4.5C33,12.4,33,12.7,33.2,13z" fill="#FCD440"/>
                    <path class="yellow" d="M11.4,13.2l0.2-0.3c0.2-0.2,0.2-0.6-0.1-0.8L6.3,7.6C6.1,7.4,5.7,7.5,5.5,7.7L5.3,7.9C5.1,8.2,5.1,8.5,5.4,8.7l5.3,4.5C10.9,13.5,11.2,13.5,11.4,13.2z" fill="#FCD440"/>
                    <path class="yellow" d="M33.2,31.9l0.2-0.3c0.2-0.2,0.6-0.3,0.8-0.1l5.3,4.5c0.2,0.2,0.3,0.6,0.1,0.8l-0.2,0.3c-0.2,0.2-0.6,0.3-0.8,0.1l-5.3-4.5C33,32.5,33,32.1,33.2,31.9z" fill="#FCD440"/>
                    <animate attributeName="opacity" dur="0.5s" values="1;0.6;1" repeatCount="indefinite" calcMode="linear"/>
                </g>
            </g>
        </svg>`,

    "눈": `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.1 52.5" style="enable-background:new 0 0 55.1 52.5;" xml:space="preserve">
            <g id="Cloud_7">
                <g id="White_cloud_7">
                    <path fill="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                    <circle fill="white" cx="17.4" cy="17.3" r="9.3"/>
                    <circle fill="white" cx="34.5" cy="15.6" r="15.6"/>
                </g>
                <circle fill="white" cx="37" cy="43.5" r="3">
                    <animateTransform attributeName="transform" attributeType="XML" dur="1.5s" keyTimes="0;0.33;0.66;1" repeatCount="indefinite" type="translate" values="1 -2;3 2; 1 4; 2 6" calcMode="linear"/>
                </circle>
                <circle fill="white" cx="27" cy="43.5" r="3">
                    <animateTransform attributeName="transform" attributeType="XML" dur="1.5s" keyTimes="0;0.33;0.66;1" repeatCount="indefinite" type="translate" values="1 -2;3 2; 1 4; 2 6" calcMode="linear" begin="0.5s"/>
                </circle>
                <circle fill="white" cx="17" cy="43.5" r="3">
                    <animateTransform attributeName="transform" attributeType="XML" dur="1.5s" keyTimes="0;0.33;0.66;1" repeatCount="indefinite" type="translate" values="1 -2;3 2; 1 4; 2 6" calcMode="linear" begin="1s"/>
                </circle>
            </g>
        </svg>`,

    "비": `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 55.1 60" style="enable-background:new 0 0 55.1 49.5;" xml:space="preserve">
            <g id="Cloud_2">
                <g id="Rain_2">
                    <path fill="white" d="M20.7,46.4c0,1.7-1.4,3.1-3.1,3.1s-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8S20.7,44.7,20.7,46.4z"/>
                    <path fill="white" d="M31.4,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8S31.4,44.7,31.4,46.4z"/>
                    <path fill="white" d="M41.3,46.4c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,3.1-7.8,3.1-7.8S41.3,44.7,41.3,46.4z"/>
                    <animateTransform attributeName="transform" attributeType="XML" dur="1s" keyTimes="0;1" repeatCount="indefinite" type="translate" values="0 0;0 10" calcMode="linear"/>
                    <animate attributeName="opacity" dur="1s" keyTimes="0;1" repeatCount="indefinite" values="1;0" calcMode="linear"/>
                </g>
                <g id="White_cloud_2">
                    <path fill="white" d="M47.2,34.5H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0C55.1,30.9,51.6,34.5,47.2,34.5z"/>
                    <circle fill="white" cx="17.4" cy="17.3" r="9.3"/>
                    <circle fill="white" cx="34.5" cy="15.6" r="15.6"/>
                </g>
            </g>
        </svg>`,

    "흐림": `
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60.7 40" style="enable-background:new 0 0 60.7 40;" xml:space="preserve">
            <g id="Cloud_1">
                <g id="White_cloud_1">
                    <path fill="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0C55.1,36.5,51.6,40,47.2,40z"/>
                    <circle fill="white" cx="17.4" cy="22.8" r="9.3"/>
                    <circle fill="white" cx="34.5" cy="21.1" r="15.6"/>
                    <animateTransform attributeName="transform" attributeType="XML" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;5;0" calcMode="linear"/>
                </g>
                <g id="Gray_cloud_1">
                    <path fill="#bdc3c7" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0C60.7,19.6,58,22.3,54.7,22.3z"/>
                    <circle fill="#bdc3c7" cx="45.7" cy="10.7" r="10.7"/>
                    <animateTransform attributeName="transform" attributeType="XML" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;-3;0" calcMode="linear"/>
                </g>
            </g>
        </svg>`
};



// 실제 SVG 내용은 너무 길어 생략했으니 기존 작성하신 코드를 그대로 넣으세요.

// 2. 데이터 정의
const weatherData = [
    { city: "Chicago, IL", temp: 72, status: "맑음" },
    { city: "Seoul, KR", temp: 15, status: "눈" },
    { city: "London, UK", temp: 58, status: "흐림" },
    { city: "Tokyo, JP", temp: 70, status: "비" }
];

// 3. DOM 요소 선택 (에러 방지를 위해 상단 배치)
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const locationList = document.getElementById('location-list');
const unitBtn = document.getElementById('unit-btn');

const cityTxt = document.getElementById('city');
const tempTxt = document.getElementById('temp');
const statusTxt = document.getElementById('status');
const iconContainer = document.getElementById('weather-icon-container');

// 4. 기능 함수 정의
function toggleSidebar() {
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function updateWeather(data) {
    // null 체크 추가 (안정성 강화)
    if (!cityTxt || !tempTxt || !statusTxt || !iconContainer) return;

    cityTxt.innerText = data.city;
    tempTxt.innerText = data.temp;
    statusTxt.innerText = data.status;

    if (iconTemplates[data.status]) {
        iconContainer.innerHTML = iconTemplates[data.status];
    }

    if (sidebar.classList.contains('active')) toggleSidebar();
}

function initLocationList() {
    if (!locationList) return;
    
    locationList.innerHTML = ""; // 중복 방지 초기화
    weatherData.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.city;
        li.addEventListener('click', () => updateWeather(item));
        locationList.appendChild(li);
    });
}

// 5. 이벤트 리스너 등록 및 초기 실행
// DOMContentLoaded를 사용하면 HTML이 완전히 로드된 후 실행됨을 보장합니다.
document.addEventListener('DOMContentLoaded', () => {
    
    // 초기 화면 설정
    initLocationList();
    updateWeather(weatherData[0]);

    // 버튼 클릭 이벤트
    if (menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
    if (overlay) overlay.addEventListener('click', toggleSidebar);

    if (unitBtn) {
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
    }
});


// 페이지 로드 시 바로 위치 요청
    navigator.geolocation.getCurrentPosition(function(position) {
        alert("위치 획득 성공! 위도: " + position.coords.latitude + ", 경도: " + position.coords.longitude);
    }, function(error) {
        alert("위치 획득 실패: " + error.message);
    });




// 1. 두 좌표 사이의 거리를 계산하는 함수 (Haversine 공식)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 지구의 반지름 (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// 2. 위치 기반 S3 데이터 조회 함수
async function fetchS3WeatherData() {
    console.log("위치 기반 최신 날씨 조회 시작...");

    // [시간 로직] 도쿄 시간 기준 데이터 생성
    const now = new Date();
    const tokyoNow = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
    
    // --- 날짜 업데이트 로직 추가 시작 ---
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    const dayName = days[tokyoNow.getDay()];
    const monthName = months[tokyoNow.getMonth()];
    const dateNum = tokyoNow.getDate();
    const yearNum = tokyoNow.getFullYear();

    const dateDisplay = document.getElementById('date');
    if (dateDisplay) {
        // 형식: SUNDAY, JANUARY 1, 2017
        dateDisplay.innerText = `${dayName}, ${monthName} ${dateNum}, ${yearNum}`;
    }
    // --- 날짜 업데이트 로직 추가 끝 ---

    let year = yearNum;
    let month = String(tokyoNow.getMonth() + 1).padStart(2, '0');
    let day = String(dateNum).padStart(2, '0');
    let hours = tokyoNow.getHours();
    
    let fileTime = "";
    if (hours >= 17) {
        fileTime = "1700";
    } else if (hours >= 5) {
        fileTime = "0500";
    } else {
        const yesterday = new Date(tokyoNow);
        yesterday.setDate(yesterday.getDate() - 1);
        year = yesterday.getFullYear();
        month = String(yesterday.getMonth() + 1).padStart(2, '0');
        day = String(yesterday.getDate()).padStart(2, '0');
        fileTime = "1700";
    }

    const targetFileName = `${year}${month}${day}${fileTime}.json`;
    const BUCKET_BASE_URL = "https://weater-project-s3-bucket-01.s3.ap-northeast-2.amazonaws.com/weather_data/";
    const S3_URL = `${BUCKET_BASE_URL}${targetFileName}`;

    try {
        // [위치 로직] 사용자 현재 좌표 가져오기
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 5000
            });
        });
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        console.log(`사용자 위치: ${userLat}, ${userLon} | 요청 파일: ${targetFileName}`);

        // [통신 로직] S3 파일 가져오기
        const response = await fetch(S3_URL);
        if (!response.ok) throw new Error(`네트워크 응답 에러: ${response.status}`);
        
        const data = await response.json();
        const itemArray = data.response.body.items.item;

        // [매칭 로직] 가장 가까운 좌표의 아이템 찾기
        let closestItem = null;
        let minDistance = Infinity;

        itemArray.forEach(item => {
            const distance = getDistance(userLat, userLon, item.latitude, item.longitude);
            if (distance < minDistance) {
                minDistance = distance;
                closestItem = item;
            }
        });

        // [UI 업데이트] 화면에 데이터 반영
        if (closestItem) {
            console.log("매칭된 지역명:", closestItem.region_name);
            
            // 도시 이름 업데이트 (DB에서 직접 가져온 region_name 사용)
            const cityDisplay = document.getElementById('city');
            if (cityDisplay) cityDisplay.innerText = closestItem.region_name;

            // 온도 및 상태 업데이트
            const tempDisplay = document.getElementById('temp');
            const statusDisplay = document.getElementById('status');
            if (tempDisplay) tempDisplay.innerText = closestItem.ta;
            if (statusDisplay) statusDisplay.innerText = closestItem.wf;

            // 아이콘 업데이트
            const iconDisp = document.getElementById('weather-icon-container');
            if (iconDisp && typeof iconTemplates !== 'undefined' && iconTemplates[closestItem.wf]) {
                iconDisp.innerHTML = iconTemplates[closestItem.wf];
            }
        } else {
            console.warn("가까운 지역 데이터를 찾을 수 없습니다.");
        }

    } catch (error) {
        console.error("날씨 데이터 로드 실패:", error);
        const cityDisplay = document.getElementById('city');
        if (cityDisplay) cityDisplay.innerText = "데이터 로드 실패";
    }
}

// 3. 페이지 로드 시 실행 트리거
document.addEventListener('DOMContentLoaded', () => {
    fetchS3WeatherData(); 
});

/**/
/**/ 