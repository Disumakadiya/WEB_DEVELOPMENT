<?php
include 'db.php';

$title = $_POST['title'];
$date = $_POST['date'];
$location = $_POST['location'];
$status = $_POST['status'];

$stmt = $conn->prepare("INSERT INTO events (title, date, location, status) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $title, $date, $location, $status);
$stmt->execute();
$stmt->close();
$conn->close();
?>
