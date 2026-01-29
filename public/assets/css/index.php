<?php
session_start();
$conn = new mysqli('localhost', 'root', '비밀번호', 'weather_db');

// 1. 세션에서 선택된 지역 가져오기 (기본값 서울)
$current_city = $_SESSION['city'] ?? '서울';

// 2. DB에서 해당 지역 좌표(nx, ny) 검색
$stmt = $conn->prepare("SELECT nx, ny FROM locations WHERE city_name = ?");
$stmt->bind_param("s", $current_city);
$stmt->execute();
$loc = $stmt->get_result()->fetch_assoc();

// 3. 기상청 초단기실황 API 호출 함수
function getKMAData($nx, $ny) {
    $serviceKey = "본인의_서비스_키"; // 공공데이터포털 발급 Decoding Key
    $baseDate = date("Ymd");
    // 실황은 매시 40분 생성되므로, 40분 이전이면 이전 시간 데이터 요청
    $baseTime = (int)date("i") < 40 ? sprintf("%02d00", date("H")-1) : date("H")."00";

    $url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
    $queryParams = '?' . http_build_query([
        'serviceKey' => $serviceKey,
        'pageNo' => 1, 'numOfRows' => 10, 'dataType' => 'JSON',
        'base_date' => $baseDate, 'base_time' => $baseTime,
        'nx' => $nx, 'ny' => $ny
    ]);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $res = curl_exec($ch);
    curl_close($ch);
    return json_decode($res, true);
}

$apiData = getKMAData($loc['nx'], $loc['ny']);
$items = $apiData['response']['body']['items']['item'] ?? [];
$w = [];
foreach ($items as $item) { $w[$item['category']] = $item['obsrValue']; }

// 강수형태(PTY) 한글 매핑
$pty_map = ["0"=>"맑음", "1"=>"비", "2"=>"비/눈", "3"=>"눈", "5"=>"빗방울", "6"=>"진눈깨비", "7"=>"눈날림"];
$status = $pty_map[$w['PTY']] ?? "맑음";
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Weather App</title>
    <style>
        body { background: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: 'Malgun Gothic', sans-serif; }
        .device { width: 350px; height: 620px; background: #fff; border: 5px solid #000; border-radius: 50px; padding: 25px; box-sizing: border-box; }
        
        /* 왼쪽 상단 메뉴 버튼 (클릭 시 settings.php 이동) */
        .menu-link { display: block; width: 35px; text-decoration: none; margin-bottom: 25px; cursor: pointer; }
        .menu-bar { width: 32px; height: 5px; background: #000; margin: 5px 0; border-radius: 2px; }
        .menu-link:hover { opacity: 0.6; }

        /* 중앙 날씨 카드 디자인 */
        .card { border: 3px solid #000; border-radius: 40px; height: 420px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-top: 10px; }
        .title { font-size: 1.1rem; color: #555; margin-bottom: 25px; }
        .temp-row { display: flex; align-items: center; gap: 10px; }
        .sun { width: 65px; height: 65px; background: #FFD700; border-radius: 50%; box-shadow: 0 0 15px rgba(255,215,0,0.5); }
        .temp-val { font-size: 5.5rem; font-weight: bold; }
        
        .info { font-size: 1.2rem; margin-top: 15px; }
        .humidity { color: #888; margin-left: 10px; font-size: 1rem; }
        .sub-text { margin-top: 15px; color: #666; font-size: 0.9rem; }
    </style>
</head>
<body>
    <div class="device">
        <a href="settings.php" class="menu-link">
            <div class="menu-bar"></div>
            <div class="menu-bar"></div>
            <div class="menu-bar"></div>
        </a>
        
        <div class="card">
            <div class="title">오늘의 <?= $current_city ?> 날씨</div>
            <div class="temp-row">
                <div class="sun"></div>
                <div class="temp-val"><?= isset($w['T1H']) ? round($w['T1H'], 1) : '0.0' ?>°</div>
            </div>
            <div class="info">
                <b><?= $status ?></b>
                <span class="humidity">습도 <?= $w['REH'] ?? '0' ?>%</span>
            </div>
            <div class="sub-text">
                풍속 <b><?= $w['WSD'] ?? '0' ?>m/s</b> · 풍향 <b><?= $w['VEC'] ?? '0' ?>°</b>
            </div>
        </div>
    </div>
</body>
</html>