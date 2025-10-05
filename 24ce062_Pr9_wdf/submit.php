<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name   = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $course = htmlspecialchars($_POST['course']);
    $year   = htmlspecialchars($_POST['year']);

    // Open or create CSV file
    $file = fopen("data.csv", "a");

    if ($file) {
        // Write as CSV (comma separated)
        fputcsv($file, [$name, $email, $course, $year]);

        fclose($file);

        echo "<h2 style='color:green;'>Form Submitted Successfully!</h2>";
        echo "<a href='index.html'>Go Back</a>";
    } else {
        echo "<h2 style='color:red;'>Error saving data!</h2>";
    }
} else {
    echo "Invalid request.";
}
?>
