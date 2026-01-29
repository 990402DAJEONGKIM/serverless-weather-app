// 실제로는 fetch('api.php')를 통해 데이터를 가져옵니다.
const mockData = {
    city: "서울",
    temp: -0.2,
    status: "맑음",
    diff: "어제보다 2°↓",
    min: -3,
    max: 7,
    humidity: 45,
    wind: 2.4
};

function updateWeather(data) {
    document.getElementById('display-city').innerText = `오늘의 ${data.city} 날씨`;
    document.getElementById('current-temp').innerText = data.temp;
    document.getElementById('weather-text').innerText = data.status;
    document.getElementById('temp-diff').innerText = data.diff;
    document.getElementById('min-temp').innerText = `${data.min}°`;
    document.getElementById('max-temp').innerText = `${data.max}°`;
    document.getElementById('humidity').innerText = data.humidity;
    document.getElementById('wind').innerText = data.wind;
}

// 페이지 로드 시 실행
window.onload = () => updateWeather(mockData);