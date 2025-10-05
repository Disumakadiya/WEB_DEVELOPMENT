<?php include("db_connect.php"); ?>

<!DOCTYPE html>
<html>
<head>
  <title>Add Student</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Add New Student</h2>
  <form method="POST" action="">
    <label>Student ID:</label><input type="number" name="student_id" required><br>
    <label>Name:</label><input type="text" name="name" required><br>
    <label>Email:</label><input type="email" name="email" required><br>
    <label>Course:</label><input type="text" name="course" required><br>
    <label>Year:</label><input type="number" name="year" required><br>
    <button type="submit" name="submit">Add Student</button>
  </form>

<?php
if (isset($_POST['submit'])) {
    $id = $_POST['student_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $course = $_POST['course'];
    $year = $_POST['year'];

    $sql = "INSERT INTO students (student_id, name, email, course, year) 
            VALUES ('$id','$name','$email','$course','$year')";

    if ($conn->query($sql) === TRUE) {
        echo "<p style='color:green;'>Student added successfully!</p>";
    } else {
        echo "<p style='color:red;'>Error: " . $conn->error . "</p>";
    }
}
?>
</body>
</html>
