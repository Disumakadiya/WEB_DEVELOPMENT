<?php
session_start();

// Clear session
session_unset();
session_destroy();

// Clear cookies
setcookie("username", "", time() - 3600, "/");
setcookie("password", "", time() - 3600, "/");

header("Location: index.php");
exit();
?>
