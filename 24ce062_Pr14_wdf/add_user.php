<?php
include 'db.php';

$username = htmlspecialchars($_POST['username']);
$email = htmlspecialchars($_POST['email']);
$password = $_POST['password'];
$status = $_POST['status'];

// Hash password if provided, else default to password123
$hashedPassword = $password ? password_hash($password, PASSWORD_DEFAULT) : password_hash("password123", PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO users (username, email, password, status) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $username, $email, $hashedPassword, $status);
$stmt->execute();
$stmt->close();
$conn->close();
?>
