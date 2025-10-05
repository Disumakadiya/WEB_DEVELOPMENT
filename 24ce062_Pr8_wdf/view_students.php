
<?php include("db_connect.php"); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Student List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Student List</h2>
  <table border="1" cellpadding="8">
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Year</th></tr>
    <?php
    $result = $conn->query("SELECT * FROM students");
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row['student_id']."</td>
                <td>".$row['name']."</td>
                <td>".$row['email']."</td>
                <td>".$row['course']."</td>
                <td>".$row['year']."</td>
              </tr>";
    }
    ?>
  </table>
</body>
</html>
