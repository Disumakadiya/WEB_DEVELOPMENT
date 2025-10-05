<?php
session_start();

// Check if session is active
if (!isset($_SESSION['username'])) {
    header("Location: index.php");
    exit();
}

// Session Timeout Check
if (isset($_SESSION['last_activity']) && (time() - $_SESSION['last_activity'] > $_SESSION['expire_time'])) {
    // Session expired
    session_unset();
    session_destroy();
    header("Location: index.php?timeout=1");
    exit();
}

$_SESSION['last_activity'] = time(); // Update last activity
?>

<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Welcome, <?php echo $_SESSION['username']; ?>!</h2>
  <p>Role: <?php echo $_SESSION['role']; ?></p>
  <p>This is a secure dashboard. Session timeout is 5 minutes of inactivity.</p>
  <a href="logout.php">Logout</a>
</body>
</html>
