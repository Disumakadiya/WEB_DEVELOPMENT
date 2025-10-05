<?php include("db_connect.php"); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Latest 5 Events</h2>
  <ul>
  <?php
  $result = $conn->query("SELECT * FROM events ORDER BY event_date DESC LIMIT 5");
  while($row = $result->fetch_assoc()) {
      echo "<li><strong>".$row['title']."</strong> - ".$row['event_date']." @ ".$row['location']."</li>";
  }
  ?>
  </ul>
</body>
</html>
