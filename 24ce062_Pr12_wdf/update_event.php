<?php
include 'db.php';

$event_id = $_POST['event_id'];
$title = $_POST['title'];
$date = $_POST['date'];
$location = $_POST['location'];
$status = $_POST['status'];

$stmt = $conn->prepare("UPDATE events SET title=?, date=?, location=?, status=? WHERE event_id=?");
$stmt->bind_param("ssssi", $title, $date, $location, $status, $event_id);
$stmt->execute();
$stmt->close();
$conn->close();
?>
