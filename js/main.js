// 현재 날짜를 이미지와 같은 형식으로 업데이트하는 함수
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // 영문 형식으로 변환 (SUNDAY, JANUARY 1, 2017 형식)
    const dateString = now.toLocaleDateString('en-US', options).toUpperCase();
    
    document.getElementById('date').innerText = dateString;
}

// 초기화
window.onload = () => {
    updateDate();
    
    // 버튼 클릭 이벤트 예시
    document.querySelector('.unit-btn').addEventListener('click', function() {
        const tempEl = document.getElementById('temp');
        if (this.innerText === '°F') {
            this.innerText = '°C';
            tempEl.innerText = '22'; // 섭씨 예시값
        } else {
            this.innerText = '°F';
            tempEl.innerText = '72'; // 화씨 예시값
        }
    });
};