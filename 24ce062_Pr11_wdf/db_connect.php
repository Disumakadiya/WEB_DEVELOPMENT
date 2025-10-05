<?php
$host = "localhost";
$user = "root";  // default for XAMPP
$pass = "";      // default empty
$dbname = "student_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("DB Connection Failed: " . $conn->connect_error);
}
?>
