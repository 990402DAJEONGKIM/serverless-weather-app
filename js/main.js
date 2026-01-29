$(document).ready(function () {
    // 1. 초기 고정 데이터 세팅 (API 대신 사용)
    var currentLocation = "Seoul, KR",
        currentUnits = 'f',
        currentTemp = { c: 24, f: 75 },
        forecast = [
            { weekdayShort: "Today", conditions: "Sunny", icon: "sunny", c: {high: 24, low: 15}, f: {high: 75, low: 59} },
            { weekdayShort: "Mon", conditions: "Partly Cloudy", icon: "partlycloudy", c: {high: 22, low: 12}, f: {high: 72, low: 54} },
            { weekdayShort: "Tue", conditions: "Cloudy", icon: "mostlycloudy", c: {high: 19, low: 10}, f: {high: 66, low: 50} },
            { weekdayShort: "Wed", conditions: "Rainy", icon: "rain", c: {high: 16, low: 8}, f: {high: 61, low: 46} }
        ];

    var $forecastDivs = $('#future .container'),
        $locateBtn = $('#locateBtn'),
        $unitBtn = $('#unitBtn');

    // 2. 화면에 데이터 렌더링 함수
    function displayWeather() {
        var today = forecast[0];
        
        // 현재 날씨 영역 업데이트
        $('#current .location').text(currentLocation);
        $('#current .date').text(new Date().toDateString());
        $('#current .weatherIcon > div').attr('class', today.icon);
        $('#current .conditions').text(today.conditions);
        $('#lastUpdated').text('Last updated at ' + getCurrentTime());

        // 예보 영역 업데이트 (내일부터 3일간)
        $forecastDivs.each(function(index) {
            var dayData = forecast[index + 1];
            $(this).find('.day').text(dayData.weekdayShort);
            $(this).find('.weatherIcon').children().attr('class', dayData.icon);
            $(this).find('.conditions').text(dayData.conditions);
        });

        updateTemps(currentUnits);
    }

    // 3. 온도 단위 변환 업데이트
    function updateTemps(units) {
        $('#current .temp').text(Math.round(currentTemp[units]));
        $forecastDivs.each(function(index) {
            var dayData = forecast[index + 1];
            $(this).find('.high').text(dayData[units].high);
            $(this).find('.low').text(dayData[units].low);
        });
    }

    // 4. 시간 포맷팅
    function getCurrentTime() {
        var now = new Date(),
            hours = now.getHours(),
            mins = now.getMinutes(),
            period = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12;
        mins = mins < 10 ? '0' + mins : mins;
        return hours + ':' + mins + period;
    }

    // 5. 이벤트 리스너
    $unitBtn.on('click', function() {
        currentUnits = $(this).attr('data-units') === 'f' ? 'c' : 'f';
        $(this).attr('data-units', currentUnits).text(currentUnits).toggleClass('on');
        updateTemps(currentUnits);
    });

    $locateBtn.on('click', function() {
        showStatus('success', 'Location updated to ' + currentLocation);
        $(this).removeClass('pulse').addClass('on');
    });

    function showStatus(type, msg) {
        $('#status').attr('class', type).find('p').text(msg);
        $('#status').slideDown('fast');
    }

    $('.close').on('click', function() {
        $('#status').slideUp('fast');
    });

    // 실행
    displayWeather();
});