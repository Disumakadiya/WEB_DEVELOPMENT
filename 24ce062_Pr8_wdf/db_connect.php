<?php
$host = "localhost";
$user = "root";  // default for XAMPP
$pass = "";      // default is empty
$dbname = "studenthub";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
