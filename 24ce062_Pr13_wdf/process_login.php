<?php
session_start();
include 'db.php';

// Validation & Sanitization
$username = trim($_POST['username']);
$password = $_POST['password'];
$captcha = $_POST['captcha'];

$username = htmlspecialchars($username, ENT_QUOTES, 'UTF-8');
$password = htmlspecialchars($password, ENT_QUOTES, 'UTF-8');
$captcha = htmlspecialchars($captcha, ENT_QUOTES, 'UTF-8');

// CAPTCHA check
if($captcha != $_SESSION['captcha']){
    $_SESSION['error'] = "Incorrect CAPTCHA!";
    header("Location: index.php");
    exit();
}

// Check username in DB
$stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows == 1){
    $user = $result->fetch_assoc();
    // Password verification
    if(password_verify($password, $user['password'])){
        $_SESSION['user'] = $user['username'];
        echo "Login successful! Welcome, " . $_SESSION['user'];
        // Redirect or dashboard here
    } else {
        $_SESSION['error'] = "Invalid password!";
        header("Location: index.php");
        exit();
    }
} else {
    $_SESSION['error'] = "Username not found!";
    header("Location: index.php");
    exit();
}

$stmt->close();
$conn->close();
?>
