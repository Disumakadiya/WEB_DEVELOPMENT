<?php
include 'db.php';

$user_id = $_POST['user_id'];
$username = htmlspecialchars($_POST['username']);
$email = htmlspecialchars($_POST['email']);
$password = $_POST['password'];
$status = $_POST['status'];

if($password) {
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("UPDATE users SET username=?, email=?, password=?, status=? WHERE user_id=?");
    $stmt->bind_param("ssssi", $username, $email, $hashedPassword, $status, $user_id);
} else {
    $stmt = $conn->prepare("UPDATE users SET username=?, email=?, status=? WHERE user_id=?");
    $stmt->bind_param("sssi", $username, $email, $status, $user_id);
}

$stmt->execute();
$stmt->close();
$conn->close();
?>
