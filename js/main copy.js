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


// 1. 두 좌표 사이의 거리를 계산하는 함수 (원본 보존)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// 2. 통합 날씨 데이터 조회 함수
async function fetchS3WeatherData() {
    console.log("--- 날씨 데이터 로드 시작 ---");

    // [A. 위치 정보 획득]
    let userLat, userLon;
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            });
        });
        userLat = position.coords.latitude;
        userLon = position.coords.longitude;
        console.log("📍 현재 위치:", userLat, userLon);
    } catch (error) {
        console.error("❌ 위치 정보 획득 실패:", error);
        if (document.getElementById('city')) document.getElementById('city').innerText = "위치 확인 불가";
        return;
    }
    

    // [B. 시간 및 날짜 설정]
    const now = new Date();
    const tokyoNow = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
    const hours = tokyoNow.getHours();
    console.log("🕒 현재 시간(Tokyo):", hours, "시");

    const fmt = (d) => ({
        y: d.getFullYear(),
        m: String(d.getMonth() + 1).padStart(2, '0'),
        d: String(d.getDate()).padStart(2, '0')
    });

    const today = fmt(tokyoNow);
    const yestDate = new Date(tokyoNow); yestDate.setDate(yestDate.getDate() - 1);
    const yesterday = fmt(yestDate);
    const dayBeforeYestDate = new Date(tokyoNow); dayBeforeYestDate.setDate(dayBeforeYestDate.getDate() - 2);
    const dayBeforeYesterday = fmt(dayBeforeYestDate);

    const BASE_URL = "https://weater-project-s3-bucket-01.s3.ap-northeast-2.amazonaws.com/weather_data/";
    let highCurr, highPrev, lowCurr, lowPrev;

    if (hours < 5) {
        highCurr = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}0500.json`;
        highPrev = `${BASE_URL}${dayBeforeYesterday.y}${dayBeforeYesterday.m}${dayBeforeYesterday.d}0500.json`;
        lowCurr = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}1700.json`;
        lowPrev = `${BASE_URL}${dayBeforeYesterday.y}${dayBeforeYesterday.m}${dayBeforeYesterday.d}1700.json`;
    } else if (hours < 17) {
        highCurr = `${BASE_URL}${today.y}${today.m}${today.d}0500.json`;
        highPrev = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}0500.json`;
        lowCurr = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}1700.json`;
        lowPrev = `${BASE_URL}${dayBeforeYesterday.y}${dayBeforeYesterday.m}${dayBeforeYesterday.d}1700.json`;
    } else {
        highCurr = `${BASE_URL}${today.y}${today.m}${today.d}0500.json`;
        highPrev = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}0500.json`;
        lowCurr = `${BASE_URL}${today.y}${today.m}${today.d}1700.json`;
        lowPrev = `${BASE_URL}${yesterday.y}${yesterday.m}${yesterday.d}1700.json`;
    }

    console.log("📂 요청 파일(현재):", highCurr.split('/').pop(), lowCurr.split('/').pop());

    // [D. 데이터 로드 및 UI 업데이트]
    try {
        const [resHC, resHP, resLC, resLP] = await Promise.all([
            fetch(highCurr).then(r => r.json()),
            fetch(highPrev).then(r => r.json()),
            fetch(lowCurr).then(r => r.json()),
            fetch(lowPrev).then(r => r.json())
        ]);

        console.log("✅ 모든 JSON 파일 수신 완료");

        const findClosest = (data, label) => {
            if (!data || !data.response || !data.response.body) {
                console.warn(`⚠️ [${label}] 데이터 구조가 올바르지 않음`);
                return null;
            }
            let closest = null;
            let minDistance = Infinity;
            data.response.body.items.item.forEach(item => {
                const distance = getDistance(userLat, userLon, item.latitude, item.longitude);
                if (distance < minDistance) { minDistance = distance; closest = item; }
            });
            return closest;
        };

        const itemHC = findClosest(resHC, "최고-현재");
        const itemHP = findClosest(resHP, "최고-이전");
        const itemLC = findClosest(resLC, "최저-현재");
        const itemLP = findClosest(resLP, "최저-이전");

        console.log("🔍 매칭된 결과:", {
            "최고(HC)": itemHC ? itemHC.ta : "없음",
            "최저(LC)": itemLC ? itemLC.ta : "없음"
        });

        // 1. 최고 기온 관련 업데이트
        if (itemHC) {
            if (document.getElementById('city')) document.getElementById('city').innerText = itemHC.region_name || itemHC.regId;
            if (document.getElementById('status')) document.getElementById('status').innerText = itemHC.wf;
            if (document.getElementById('temp')) {
                document.getElementById('temp').innerText = itemHC.ta;
                console.log("🌡️ temp 업데이트 완료:", itemHC.ta);
            }
        }

        // 2. 최저 기온 (temp2)
        if (itemLC) {
            const temp2Elem = document.getElementById('temp2');
            if (temp2Elem) {
                temp2Elem.innerText = itemLC.ta;
                console.log("🌡️ temp2 업데이트 완료:", itemLC.ta);
            } else {
                console.error("❌ HTML에 id='temp2'인 요소가 없습니다.");
            }
        } else {
            console.warn("⚠️ 최저 기온 데이터(itemLC)를 찾지 못했습니다.");
        }

        // 3. 기온 변화량 표시
        if (itemHC && itemHP && itemLC && itemLP) {
            const hDiff = (parseFloat(itemHC.ta) - parseFloat(itemHP.ta)).toFixed(1);
            const lDiff = (parseFloat(itemLC.ta) - parseFloat(itemLP.ta)).toFixed(1);
            const formatDiff = (diff) => diff > 0 ? `▲${diff}` : diff < 0 ? `▼${Math.abs(diff)}` : `0.0`;
            
            if (document.getElementById('temp_differ')) document.getElementById('temp_differ').innerText = formatDiff(hDiff);
            if (document.getElementById('temp2_differ')) document.getElementById('temp2_differ').innerText = formatDiff(lDiff);
            console.log("📊 기온 변화량 업데이트 완료");
        }

    } catch (error) {
        console.error("❌ 데이터 로드 또는 처리 중 에러 발생:", error);
    }
    // [D. 데이터 로드 및 UI 업데이트] try 내부 최하단
try {
    // ... 기존 데이터 업데이트 로직들 (temp, temp2, differ 등) ...

    // 2. 모든 데이터가 다 들어갔으므로 UI를 보여줍니다.
    const ui = document.getElementById('main-ui');
    if (ui) {
        ui.style.visibility = 'visible';
        ui.style.opacity = '1';
        console.log("✨ 화면 표시 완료");
    }

} catch (error) {
    console.error("데이터 로드 오류:", error);
    // 에러가 나더라도 사용자가 화면은 볼 수 있게 처리
    document.getElementById('main-ui').style.visibility = 'visible';
    document.getElementById('main-ui').style.opacity = '1';
}
}

document.addEventListener('DOMContentLoaded', fetchS3WeatherData);