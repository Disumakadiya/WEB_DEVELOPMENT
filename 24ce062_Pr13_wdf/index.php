<?php
session_start();

// Generate simple math CAPTCHA
$num1 = rand(1, 10);
$num2 = rand(1, 10);
$_SESSION['captcha'] = $num1 + $num2;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Secure Login</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        form { max-width: 400px; margin: auto; }
        input { width: 100%; padding: 10px; margin: 5px 0; }
        button { padding: 10px; width: 100%; }
        .error { color: red; }
    </style>
</head>
<body>

<h2>Login Form</h2>
<?php if(isset($_SESSION['error'])) { 
    echo "<p class='error'>".$_SESSION['error']."</p>"; 
    unset($_SESSION['error']);
} ?>

<form action="process_login.php" method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="password" placeholder="Password" required>
    <label>Solve: <?php echo $num1 . " + " . $num2 ?> = ?</label>
    <input type="text" name="captcha" placeholder="Enter result" required>
    <button type="submit">Login</button>
</form>

</body>
</html>
