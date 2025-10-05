<?php
include 'db.php';

$user_id = $_POST['user_id'];

$stmt = $conn->prepare("DELETE FROM users WHERE user_id=?");
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->close();
$conn->close();
?>
