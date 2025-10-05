<?php include("db_connect.php"); ?>
<!DOCTYPE html>
<html>
<head>
  <title>Update Student</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Update Student Year</h2>
  <form method="POST" action="">
    <label>Student ID:</label><input type="number" name="student_id" required><br>
    <label>New Year:</label><input type="number" name="year" required><br>
    <button type="submit" name="update">Update</button>
  </form>

<?php
if (isset($_POST['update'])) {
    $id = $_POST['student_id'];
    $year = $_POST['year'];

    $sql = "UPDATE students SET year='$year' WHERE student_id='$id'";
    if ($conn->query($sql) === TRUE) {
        echo "<p style='color:green;'>Record updated successfully!</p>";
    } else {
        echo "<p style='color:red;'>Error: " . $conn->error . "</p>";
    }
}
?>
</body>
</html>
