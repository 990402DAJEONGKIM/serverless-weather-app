<?php
function get_kma_weather($nx, $ny) {
    $serviceKey = "본인의_서비스_키"; // 공공데이터포털에서 발급받은 Decoding Key
    
    // 기상청 가이드: 실황은 매시간 40분에 생성됨 (현재 시간 기준 보정)
    $baseDate = date("Ymd");
    $baseTime = date("H") . "00"; 
    if ((int)date("i") < 40) {
        $baseTime = sprintf("%02d00", (int)date("H") - 1);
    }

    $url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
    $queryParams = '?' . urlencode('serviceKey') . '=' . $serviceKey;
    $queryParams .= '&' . urlencode('pageNo') . '=' . urlencode('1');
    $queryParams .= '&' . urlencode('numOfRows') . '=' . urlencode('1000');
    $queryParams .= '&' . urlencode('dataType') . '=' . urlencode('JSON');
    $queryParams .= '&' . urlencode('base_date') . '=' . urlencode($baseDate);
    $queryParams .= '&' . urlencode('base_time') . '=' . urlencode($baseTime);
    $queryParams .= '&' . urlencode('nx') . '=' . urlencode($nx);
    $queryParams .= '&' . urlencode('ny') . '=' . urlencode($ny);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url . $queryParams);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $response = curl_exec($ch);
    $data = json_decode($response, true);
    curl_close($ch);

    if ($data['response']['header']['resultCode'] !== '00') return null;

    $items = $data['response']['body']['items']['item'];
    $result = [];
    foreach ($items as $item) {
        $result[$item['category']] = $item['obsrValue'];
    }
    return $result;
}
?>