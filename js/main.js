// 날씨 카테고리 목록, 필요시 추가하면 됨.
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
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 61.7 42.8" style="enable-background:new 0 0 61.7 42.8;" xml:space="preserve">
            <g id="Cloud_3">
              <g id="White_cloud_3">
                  <path id="XMLID_24_" class="white" d="M47.2,42.8H7.9c-4.3,0-7.9-3.5-7.9-7.9l0,0C0,30.5,3.5,27,7.9,27h39.4c4.3,0,7.9,3.5,7.9,7.9 v0C55.1,39.2,51.6,42.8,47.2,42.8z"/>
                  <circle id="XMLID_23_" class="white" cx="17.4" cy="25.5" r="9.3"/>
                  <circle id="XMLID_22_" class="white" cx="34.5" cy="23.9" r="15.6"/>
                <animateTransform attributeName="transform"
                  attributeType="XML"
                  dur="6s"
                  keyTimes="0;0.5;1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0;5;0"
                  calcMode="linear">
                </animateTransform>
              </g>
              <g id="Sun_3">
                  <circle id="XMLID_30_" class="yellow" cx="31.4" cy="18.5" r="9"/>
                <g>
                    <path id="XMLID_31_" class="yellow" d="M31.4,6.6L31.4,6.6c-0.4,0-0.6-0.3-0.6-0.6V0.6C30.8,0.3,31,0,31.3,0l0.1,0 C31.7,0,32,0.3,32,0.6v5.5C32,6.4,31.7,6.6,31.4,6.6z"/>
                    <path id="XMLID_34_" class="yellow" d="M31.4,30.1L31.4,30.1c-0.4,0-0.6,0.3-0.6,0.6v5.5c0,0.3,0.3,0.6,0.6,0.6h0.1 c0.3,0,0.6-0.3,0.6-0.6v-5.5C32,30.4,31.7,30.1,31.4,30.1z"/>
                    <path id="XMLID_35_" class="yellow" d="M19.6,18.3L19.6,18.3c0,0.4-0.3,0.6-0.6,0.6h-5.5c-0.3,0-0.6-0.3-0.6-0.6v-0.1 c0-0.3,0.3-0.6,0.6-0.6H19C19.3,17.8,19.6,18,19.6,18.3z"/>
                    <path id="XMLID_33_" class="yellow" d="M43.1,18.3L43.1,18.3c0,0.4,0.3,0.6,0.6,0.6h5.5c0.3,0,0.6-0.3,0.6-0.6v-0.1 c0-0.3-0.3-0.6-0.6-0.6h-5.5C43.4,17.8,43.1,18,43.1,18.3z"/>
                    <path id="XMLID_37_" class="yellow" d="M22.4,26L22.4,26c0.3,0.3,0.2,0.7,0,0.9l-4.2,3.6c-0.2,0.2-0.6,0.2-0.8-0.1l-0.1-0.1 c-0.2-0.2-0.2-0.6,0.1-0.8l4.2-3.6C21.9,25.8,22.2,25.8,22.4,26z"/>
                    <path id="XMLID_36_" class="yellow" d="M40.3,10.7L40.3,10.7c0.3,0.3,0.6,0.3,0.8,0.1l4.2-3.6c0.2-0.2,0.3-0.6,0.1-0.8l-0.1-0.1 c-0.2-0.2-0.6-0.3-0.8-0.1l-4.2,3.6C40.1,10.1,40,10.5,40.3,10.7z"/>
                    <path id="XMLID_39_" class="yellow" d="M22.4,10.8L22.4,10.8c0.3-0.3,0.2-0.7,0-0.9l-4.2-3.6c-0.2-0.2-0.6-0.2-0.8,0.1l-0.1,0.1 c-0.2,0.2-0.2,0.6,0.1,0.8l4.2,3.6C21.9,11,22.2,11,22.4,10.8z"/>
                    <path id="XMLID_38_" class="yellow" d="M40.3,26.1L40.3,26.1c0.3-0.3,0.6-0.3,0.8-0.1l4.2,3.6c0.2,0.2,0.3,0.6,0.1,0.8l-0.1,0.1 c-0.2,0.2-0.6,0.3-0.8,0.1l-4.2-3.6C40.1,26.7,40,26.3,40.3,26.1z"/>
                  <animate attributeType="CSS"
                    attributeName="opacity"
                    attributeType="XML"
                    dur="0.5s"
                    keyTimes="0;0.5;1"
                    repeatCount="indefinite"
                    values="1;0.6;1"
                    calcMode="linear"/>
                </g>
              </g>
              <animateTransform attributeName="transform"
                attributeType="XML"
                dur="2s"
                keyTimes="0;1"
                repeatCount="indefinite"
                type="scale"
                values="1;1"
                calcMode="linear">
              </animateTransform>
             </g>
             <g id="Gray_cloud_3">
                <path id="XMLID_20_" class="gray" d="M55.7,25.1H34.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C61.7,22.4,59,25.1,55.7,25.1z"/>
                <circle id="XMLID_19_" class="gray" cx="46.7" cy="13.4" r="10.7"/>
              <animateTransform attributeName="transform"
                attributeType="XML"
                dur="6s"
                keyTimes="0;0.5;1"
                repeatCount="indefinite"
                type="translate"
                values="0;-3;0"
                calcMode="linear">
              </animateTransform>
             </g>
           </g>
          </svg>`,

    "구름많음": `
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

// 2. 두 좌표 사이의 거리 계산 (Haversine 공식)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// 3. 통합 날씨 데이터 조회 및 UI 업데이트 함수
async function fetchS3WeatherData() {
    console.log("--- 날씨 데이터 동기화 시작 ---");

    // [A] 위치 정보 획득
    let userLat, userLon;
    
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                enableHighAccuracy: true,
                timeout: 10000
            });
        });
        userLat = position.coords.latitude;
        userLon = position.coords.longitude;
    } catch (e) {
        console.warn("위치 정보 실패, 기본값(서울) 사용");
        userLat = 37.5665; userLon = 126.9780;
    }

    // [B] 시간 및 날짜 설정
    const now = new Date();
    const tokyoNow = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tokyo"}));
    const hours = tokyoNow.getHours();
    
    const fmt = (d) => ({
        y: d.getFullYear(),
        m: String(d.getMonth() + 1).padStart(2, '0'),
        d: String(d.getDate()).padStart(2, '0')
    });

    const today = fmt(tokyoNow);
    const yesterdayDate = new Date(tokyoNow); yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = fmt(yesterdayDate);
    const dayBeforeYesterdayDate = new Date(tokyoNow); dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2);
    const dayBeforeYesterday = fmt(dayBeforeYesterdayDate);

    // 날짜 표시
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    if (document.getElementById('date')) {
        document.getElementById('date').innerText = `${days[tokyoNow.getDay()]}, ${months[tokyoNow.getMonth()]} ${tokyoNow.getDate()}, ${tokyoNow.getFullYear()}`;
    }

    // [C] 파일 경로 설정
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

    // [D] 데이터 로드 및 UI 업데이트
    try {
        const [resHC, resHP, resLC, resLP] = await Promise.all([
            fetch(highCurr).then(r => r.json()),
            fetch(highPrev).then(r => r.json()),
            fetch(lowCurr).then(r => r.json()),
            fetch(lowPrev).then(r => r.json())
        ]);

        const findClosest = (data) => {
            if (!data) return null;
            let items = Array.isArray(data) ? data : (data.response?.body?.items?.item || null);
            if (!items || !Array.isArray(items)) return null;

            let closest = null; let minDistance = Infinity;
            items.forEach(item => {
                const d = getDistance(userLat, userLon, item.latitude, item.longitude);
                if (d < minDistance) { minDistance = d; closest = item; }
            });
            return closest;
        };

        const itemHC = findClosest(resHC);
        const itemHP = findClosest(resHP);
        const itemLC = findClosest(resLC);
        const itemLP = findClosest(resLP);

        // 1. 최고/최저 기온 및 아이콘 업데이트 (새 ID 반영)
        if (itemHC) {
            if (document.getElementById('city')) document.getElementById('city').innerText = itemHC.region_name || itemHC.regId;
            if (document.getElementById('status')) document.getElementById('status').innerText = itemHC.wf;
            if (document.getElementById('high-temp')) document.getElementById('high-temp').innerText = itemHC.ta;

            const iconContainer = document.getElementById('weather-icon-container');
            if (iconContainer && iconTemplates[itemHC.wf]) {
                iconContainer.innerHTML = iconTemplates[itemHC.wf];
            }
        }
        if (itemLC && document.getElementById('low-temp')) {
            document.getElementById('low-temp').innerText = itemLC.ta;
        }

        // 2. [비교 로직] 낮과 밤 기온 동시 출력 및 색상 적용
        if (itemHC && itemHP && itemLC && itemLP) {
            const hDiff = (parseFloat(itemHC.ta) - parseFloat(itemHP.ta)).toFixed(1);
            const lDiff = (parseFloat(itemLC.ta) - parseFloat(itemLP.ta)).toFixed(1);
            
            const chip = document.querySelector('.comparison-chip span');
            if (chip) {
                // 색상 적용 함수
                const getColorClass = (diff) => diff > 0 ? 'style="color: #ff4d4d; font-weight: bold;"' : diff < 0 ? 'style="color: #007bff; font-weight: bold;"' : '';
                
                const hText = hDiff > 0 ? `낮 기온 <span ${getColorClass(hDiff)}>▲${hDiff}°</span> 따뜻함` : hDiff < 0 ? `낮 기온 <span ${getColorClass(hDiff)}>▼${Math.abs(hDiff)}°</span> 추움` : `낮 기온 어제와 동일`;
                const lText = lDiff > 0 ? `밤 기온 <span ${getColorClass(lDiff)}>▲${lDiff}°</span> 따뜻함` : lDiff < 0 ? `밤 기온 <span ${getColorClass(lDiff)}>▼${Math.abs(lDiff)}°</span> 추움` : `밤 기온 어제와 동일`;
                
                chip.innerHTML = `${hText}, ${lText}`;
            }
        }

        // 3. 로딩 종료 및 화면 표시
        const loading = document.getElementById('loading-text');
        const ui = document.getElementById('main-ui');
        if (loading) loading.style.display = 'none';
        if (ui) {
            ui.style.visibility = 'visible';
            ui.style.opacity = '1';
        }

    } catch (error) {
        console.error("❌ 데이터 처리 에러:", error);
        if (document.getElementById('loading-text')) document.getElementById('loading-text').style.display = 'none';
        if (document.getElementById('main-ui')) {
            document.getElementById('main-ui').style.visibility = 'visible';
            document.getElementById('main-ui').style.opacity = '1';
        }
    }
}

// 4. 실행 (DOMContentLoaded 시점에 단 한 번)
document.addEventListener('DOMContentLoaded', fetchS3WeatherData);
