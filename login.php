<?php
// Start the session to manage login state
session_start();

// Database connection (Replace with your own credentials)
$servername = "sql311.infinityfree.com";
$username = "if0_36420104";
$password = "RMTc0GJLa6k";
// $dbname = "halfway";
$dbname = "if0_36420104_halfway";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Example: Processing the login form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Simple query to check if email exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc(); // Get user data from the database

        // Verify the provided password against the hashed password in the database
        if (password_verify($password, $user['password'])) {
            // Password is correct, start a session
            $_SESSION['email'] = $email;
            header('Location: ../../Oldv2/Meetme app landing page/landing.php'); // Redirect to a welcome page (or dashboard)
            exit();
        } else {
            $error_message = "Invalid email or password!";
        }
    } else {
        $error_message = "Invalid email or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap" rel="stylesheet">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <div class="login-container">
    <div class="form-section">
      <h1 class="form-title">LOG IN</h1>
      <!-- Display error message if login fails -->
      <?php if (isset($error_message)): ?>
        <div class="error-message"><?php echo $error_message; ?></div>
      <?php endif; ?>

      <form class="form-modern" method="POST" action="">
        <div class="form-group">
          <i class='bx bx-user'></i>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required>
        </div>

        <div class="form-group">
          <i class='bx bx-lock'></i>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" required>
        </div>

        <a href="#" class="forgot-password">Forgot Password?</a>

        <button type="submit" class="btn-modern">Sign in</button>
        <a href="sign-up.php" class="btn-create-account">Create Account</a>
      </form>
    </div>

    <div class="divider"></div>

    <div class="map-section">
      <h2 class="map-title">MEET ME HALFWAY</h2>
      <div class="animated-description">
        <p>Welcome to <strong>Meet Me Halfway</strong>, your web app for finding the perfect midpoint!</p>
      </div>
    </div>
  </div>
</body>
</html>

<?php
// Close the MySQL connection
$conn->close();
?>

