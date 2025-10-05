<?php
include 'db.php';

$result = $conn->query("SELECT * FROM events ORDER BY event_id DESC");

$events = [];
while($row = $result->fetch_assoc()) {
    $events[] = $row;
}

echo json_encode($events);
$conn->close();
?>
