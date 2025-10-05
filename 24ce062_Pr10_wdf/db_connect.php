<?php
$host = "localhost";
$user = "root";  // default for XAMPP
$pass = "";      // default empty
$dbname = "secure_login";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>
