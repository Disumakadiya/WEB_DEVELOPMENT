<?php
include 'db.php';

$event_id = $_POST['event_id'];

$stmt = $conn->prepare("DELETE FROM events WHERE event_id=?");
$stmt->bind_param("i", $event_id);
$stmt->execute();
$stmt->close();
$conn->close();
?>
