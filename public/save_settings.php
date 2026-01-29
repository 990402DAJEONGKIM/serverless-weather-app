<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['city'])) {
    $_SESSION['city'] = $_POST['city']; // 세션에 저장
    header("Location: index.html");   // 저장 후 메인으로 이동
    exit;
}
?>