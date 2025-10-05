<?php
session_start();
include("db_connect.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username=? AND password=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();

        // Set session variables
        $_SESSION['username'] = $row['username'];
        $_SESSION['role'] = $row['role'];
        $_SESSION['last_activity'] = time();   // Track session time
        $_SESSION['expire_time'] = 300;        // Timeout = 5 minutes (300 seconds)

        header("Location: dashboard.php");
        exit();
    } else {
        $_SESSION['error'] = "Invalid Username or Password!";
        header("Location: index.php");
        exit();
    }
}
?>
