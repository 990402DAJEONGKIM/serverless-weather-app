<?php
session_start();

// 데이터베이스 연결 (경로 주의: includes 폴더가 한 단계 상위에 있을 경우)
// require_once '../includes/db_connect.php'; 

// 1. 지역 선택 처리 로직
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['city'])) {
    $_SESSION['city'] = $_POST['city'];
    // 설정을 마치고 메인 페이지로 이동
    header("Location: index.html"); 
    exit;
}

// 현재 설정된 도시 (기본값 서울)
$current_city = $_SESSION['city'] ?? '서울';
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>설정 - 지역 선택</title>
    <link rel="stylesheet" href="./assets/css/style.css">
    <style>
        /* 설정 페이지 전용 추가 스타일 */
        .settings-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }
        .city-select-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        select {
            padding: 15px;
            border: 3px solid #000;
            border-radius: 15px;
            font-size: 1rem;
            font-family: inherit;
        }
        .save-btn {
            background: #000;
            color: #fff;
            padding: 15px;
            border: none;
            border-radius: 15px;
            font-size: 1.1rem;
            cursor: pointer;
            font-weight: bold;
        }
        .back-link {
            text-align: center;
            text-decoration: none;
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="device-wrapper">
        <div class="device-frame">
            <main class="weather-card">
                <div class="settings-container">
                    <header class="card-header">
                        <h1>지역 설정</h1>
                        <p>날씨를 확인할 도시를 선택하세요.</p>
                    </header>

                    <form method="POST" class="city-select-form">
                        <select name="city">
                            <option value="서울" <?= $current_city == '서울' ? 'selected' : '' ?>>서울특별시</option>
                            <option value="부산" <?= $current_city == '부산' ? 'selected' : '' ?>>부산광역시</option>
                            <option value="인천" <?= $current_city == '인천' ? 'selected' : '' ?>>인천광역시</option>
                            <option value="대구" <?= $current_city == '대구' ? 'selected' : '' ?>>대구광역시</option>
                            <option value="광주" <?= $current_city == '광주' ? 'selected' : '' ?>>광주광역시</option>
                            <option value="제주" <?= $current_city == '제주' ? 'selected' : '' ?>>제주특별자치도</option>
                        </select>
                        <button type="submit" class="save-btn">설정 저장</button>
                    </form>
                    
                    <a href="index.html" class="back-link">돌아가기</a>
                </div>
            </main>
        </div>
    </div>
</body>
</html>