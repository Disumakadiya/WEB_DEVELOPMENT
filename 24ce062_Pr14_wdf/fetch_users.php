<?php
include 'db.php';

$result = $conn->query("SELECT user_id, username, email, status FROM users ORDER BY user_id DESC");

$users = [];
while($row = $result->fetch_assoc()) {
    $users[] = $row;
}

echo json_encode($users);
$conn->close();
?>
