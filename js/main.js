$(document).ready(function () {
    var currentDate,
        currentLocation = "Chicago, IL", // 초기값
        currentTemp = { c: 22, f: 72 }, // 더미 데이터 (연결 전 확인용)
        currentUnits = 'f',
        forecast = [],
        $forecastDivs = $('#future .container'),
        $locateBtn = $('#locateBtn'),
        $unitBtn = $('#unitBtn'),
        $statusBar = $('#status');

    // 1. 위치 정보 가져오기
    function getCurrentLocation() {
        if (!navigator.geolocation) {
            showStatus('error', '이 브라우저는 위치 정보를 지원하지 않습니다.');
            return;
        }
        
        showStatus('', '위치를 찾는 중...');
        
        navigator.geolocation.getCurrentPosition(function(pos) {
            const loc = pos.coords.latitude + ',' + pos.coords.longitude;
            getWeather(loc); 
            showStatus('success', '위치를 확인했습니다!');
            $locateBtn.addClass('on').removeClass('pulse');
        }, function() {
            showStatus('error', '위치 정보를 가져오는데 실패했습니다.');
        });
    }

    // 2. Weather API 호출 (현재 Wunderground API는 키가 있어야 작동함)
    function getWeather(location) {
        // 실제 운영시에는 아래 URL을 OpenWeatherMap 등으로 교체해야 합니다.
        console.log("Fetching weather for: " + location);
        
        // 여기에 API fetch 로직이 들어갑니다.
        // 현재는 UI 확인을 위해 displayWeather()를 강제로 호출할 수 있습니다.
        displayWeather(); 
    }

    // 3. 화면에 날씨 표시
    function displayWeather() {
        $('#current .location').html(currentLocation);
        $('#current .temp').html(Math.round(currentTemp[currentUnits]));
        $('#lastUpdated').html('최근 업데이트: ' + getCurrentTime());
    }

    function getCurrentTime() {
        var now = new Date();
        return now.getHours() + ":" + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    }

    function showStatus(type, msg) {
        $statusBar.removeClass('error success').addClass(type);
        $statusBar.find('p').html(msg);
        $statusBar.slideDown('fast');
    }

    // 이벤트 리스너
    $locateBtn.on('click', getCurrentLocation);
    
    $unitBtn.on('click', function() {
        currentUnits = (currentUnits === 'f') ? 'c' : 'f';
        $(this).text(currentUnits).toggleClass('on');
        displayWeather();
    });

    $('.close').on('click', function() { $statusBar.slideUp('fast'); });

    // 시작 시 실행
    getWeather(currentLocation);
});