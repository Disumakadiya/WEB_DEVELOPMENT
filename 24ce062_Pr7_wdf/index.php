<?php
session_start();
include("users.php");

// If already logged in, redirect
if (isset($_SESSION['username'])) {
    header("Location: home.php");
    exit();
}

$message = "";

// Handle login form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $remember = isset($_POST['remember']);

    if (isset($users[$username]) && $users[$username] == $password) {
        // Valid login
        $_SESSION['username'] = $username;

        // If Remember Me checked, set cookie for 7 days
        if ($remember) {
            setcookie("username", $username, time() + (7 * 24 * 60 * 60), "/");
            setcookie("password", $password, time() + (7 * 24 * 60 * 60), "/");
        }

        header("Location: home.php");
        exit();
    } else {
        $message = "Invalid username or password!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form method="POST" action="">
        <h2>Login</h2>
        <p style="color:red;"><?php echo $message; ?></p>

        <label>Username:</label>
        <input type="text" name="username" required value="<?php if(isset($_COOKIE['username'])) echo $_COOKIE['username']; ?>"><br>

        <label>Password:</label>
        <input type="password" name="password" required value="<?php if(isset($_COOKIE['password'])) echo $_COOKIE['password']; ?>"><br>

        <label>
            <input type="checkbox" name="remember" <?php if(isset($_COOKIE['username'])) echo "checked"; ?>> Remember Me
        </label><br>

        <button type="submit">Login</button>
    </form>
</body>
</html>
