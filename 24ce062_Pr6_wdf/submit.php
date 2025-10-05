<?php
// Simple Registration Data Saver

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name   = htmlspecialchars($_POST['name']);
    $email  = htmlspecialchars($_POST['email']);
    $course = htmlspecialchars($_POST['course']);

    if (!empty($name) && !empty($email) && !empty($course)) {
        // Store data in a text file
        $file = fopen("registrations.txt", "a");
        $line = $name . " | " . $email . " | " . $course . "\n";
        fwrite($file, $line);
        fclose($file);

        // Redirect to success page
        header("Location: success.html");
        exit();
    } else {
        // Redirect to error page
        header("Location: error.html");
        exit();
    }
} else {
    echo "Invalid request.";
}
?>
