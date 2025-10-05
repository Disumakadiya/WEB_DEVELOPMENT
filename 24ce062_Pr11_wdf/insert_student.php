<?php include("db_connect.php"); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Add Student</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Add Student</h2>
  <form method="POST">
    <label>Name:</label><input type="text" name="name" required><br>
    <label>Email:</label><input type="email" name="email" required><br>
    
    <label>Course:</label>
    <select name="course_id" required>
      <?php
      $res = $conn->query("SELECT * FROM courses");
      while($row = $res->fetch_assoc()) {
        echo "<option value='".$row['course_id']."'>".$row['course_name']."</option>";
      }
      ?>
    </select><br>

    <label>Year:</label><input type="number" name="year" required><br>
    
    <button type="submit" name="submit">Add Student</button>
  </form>

<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course_id = $_POST['course_id'];
    $year = $_POST['year'];

    $sql = "INSERT INTO students (name, email, course_id, year) VALUES (?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssii", $name, $email, $course_id, $year);

    if ($stmt->execute()) {
        echo "<p style='color:green;'>Student added successfully!</p>";
    } else {
        echo "<p style='color:red;'>Error: " . $conn->error . "</p>";
    }
}
?>
</body>
</html>
