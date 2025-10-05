<?php include("db_connect.php"); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Student List</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Student Records</h2>

  <form method="GET">
    <input type="text" name="search" placeholder="Search by name">
    <button type="submit">Search</button>
  </form>

  <table border="1" cellpadding="8">
    <tr><th>ID</th><th>Name</th><th>Email</th><th>Course</th><th>Year</th><th>Action</th></tr>
    <?php
    $search = isset($_GET['search']) ? $_GET['search'] : "";
    $sql = "SELECT s.student_id, s.name, s.email, c.course_name, s.year 
            FROM students s 
            JOIN courses c ON s.course_id = c.course_id
            WHERE s.name LIKE ?";

    $stmt = $conn->prepare($sql);
    $like = "%$search%";
    $stmt->bind_param("s", $like);
    $stmt->execute();
    $result = $stmt->get_result();

    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>".$row['student_id']."</td>
                <td>".$row['name']."</td>
                <td>".$row['email']."</td>
                <td>".$row['course_name']."</td>
                <td>".$row['year']."</td>
                <td><a href='delete_student.php?id=".$row['student_id']."'>Delete</a></td>
              </tr>";
    }
    ?>
  </table>
</body>
</html>
