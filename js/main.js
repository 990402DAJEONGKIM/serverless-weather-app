// 1. API 대신 사용할 가짜 데이터 (Dummy Data)
const weatherData = {
    "서울": { temp: "18°C", humidity: "30%", wind: "5 km/h", city: "Seoul", icon: "01d" },
    "도쿄": { temp: "22°C", humidity: "50%", wind: "10 km/h", city: "Tokyo", icon: "02d" },
    "뉴욕": { temp: "12°C", humidity: "65%", wind: "20 km/h", city: "New York", icon: "09d" },
    "런던": { temp: "10°C", humidity: "80%", wind: "15 km/h", city: "London", icon: "10d" }
};

const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");

function updateWeather() {
    const cityName = cityInput.value.trim();
    
    // 데이터가 있는지 확인
    if (weatherData[cityName]) {
        const data = weatherData[cityName];
        
        // 화면 요소 업데이트
        document.querySelector(".temp").innerHTML = data.temp;
        document.querySelector(".city").innerHTML = data.city;
        document.querySelector(".humidity").innerHTML = data.humidity;
        document.querySelector(".wind").innerHTML = data.wind;
        document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
        
    } else {
        alert("데이터가 없습니다. (서울, 도쿄, 뉴욕, 런던 중 입력해보세요!)");
    }
}

// 버튼 클릭 이벤트
searchBtn.addEventListener("click", updateWeather);

// 엔터 키 이벤트
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") updateWeather();
});