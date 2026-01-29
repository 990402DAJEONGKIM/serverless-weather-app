<?php
session_start();
$conn = new mysqli('localhost', 'root', '비밀번호', 'weather_db');

// 지역 선택 시 세션 저장 후 메인 이동
if (isset($_GET['city'])) {
    $_SESSION['city'] = $_GET['city'];
    header("Location: index.php");
    exit;
}

$result = $conn->query("SELECT city_name FROM locations");
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Settings</title>
    <style>
        body { background: #f0f0f0; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-family: sans-serif; }
        .device { width: 350px; height: 620px; background: #fff; border: 5px solid #000; border-radius: 50px; padding: 30px; box-sizing: border-box; }
        .header { display: flex; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px; }
        .back { font-size: 28px; text-decoration: none; color: #000; margin-right: 15px; }
        .city-list { list-style: none; padding: 0; }
        .city-item { padding: 15px; border-bottom: 1px solid #f5f5f5; }
        .city-item a { text-decoration: none; color: #333; display: block; font-size: 1.1rem; }
        .city-item:hover { background: #fafafa; }
    </style>
</head>
<body>
    <div class="device">
        <div class="header">
            <a href="index.php" class="back">←</a>
            <h2>지역 설정</h2>
        </div>
        <ul class="city-list">
            <?php while($row = $result->fetch_assoc()): ?>
                <li class="city-item">
                    <a href="?city=<?= urlencode($row['city_name']) ?>"><?= $row['city_name'] ?></a>
                </li>
            <?php endwhile; ?>
        </ul>
    </div>
</body>
</html>