<?php
// Start the session to manage login state
session_start();

// Database connection (Replace with your own credentials)
$servername = "sql311.infinityfree.com";
$username = "if0_36420104";
$password = "RMTc0GJLa6k";
$dbname = "if0_36420104_halfway";
// $dbname = "halfway";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Processing the signup form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $confirm_email = $_POST['confirm_email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Check if the "Re-enter Email" field is empty or doesn't match the original email
    if (empty($confirm_email)) {
        $error_message = "Please re-enter your email!";
    } elseif ($email !== $confirm_email) {
        $error_message = "Emails do not match!";
    }

    // Check if the "Re-enter Password" field is empty or doesn't match the original password
    elseif (empty($confirm_password)) {
        $error_message = "Please re-enter your password!";
    } elseif ($password !== $confirm_password) {
        $error_message = "Passwords do not match!";
    }

    // Check if email already exists
    else {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);
        
        if ($result->num_rows > 0) {
            $error_message = "Email is already taken!";
        } else {
            // Hash the password before saving it
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Insert user into the database
            $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$first_name', '$last_name', '$email', '$hashed_password')";

            if ($conn->query($sql) === TRUE) {
                $_SESSION['email'] = $email;
                header('Location: login.php'); // Redirect to login page after successful signup
                exit();
            } else {
                $error_message = "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jaro:opsz@6..72&display=swap" rel="stylesheet">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
  <div class="login-container">
    <div class="form-section">
      <h1>SIGN UP</h1>

      <!-- Display error message if validation fails -->
      <?php if (isset($error_message)): ?>
        <div class="error-message"><?php echo $error_message; ?></div>
      <?php endif; ?>

      <!-- Signup form -->
      <form method="POST" action="">
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="first_name" placeholder="First Name" required>

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="last_name" placeholder="Last Name" required>

        <label for="emailSignup">Email</label>
        <div class="form-group">
          <i class='bx bx-user'></i>
          <input type="email" id="emailSignup" name="email" placeholder="Email" required>
        </div>

        <label for="confirmEmail">Re-enter Email</label>
        <div class="form-group">
          <i class='bx bx-user'></i>
          <input type="email" id="confirmEmail" name="confirm_email" placeholder="Re-enter Email" required>
        </div>

        <label for="passwordSignup">Password</label>
        <div class="form-group">
          <i class='bx bx-lock'></i>
          <input type="password" id="passwordSignup" name="password" placeholder="Password" required>
        </div>

        <label for="confirmPassword">Re-enter Password</label>
        <div class="form-group">
          <input type="password" id="confirmPassword" name="confirm_password" placeholder="Re-enter Password" required>
        </div>

        <button type="submit" class="btn-signup">Create Account</button>
      </form>
      <!-- Back to Login Button -->
      <a href="login.php" class="btn-back">Back to Login</a>
    </div>

    <div class="divider"></div>

    <div class="map-section">
      <h2 class="map-title">MEET ME HALFWAY</h2>
      <div class="animated-description">
        <p id="typing-text">Create an account on Meet Me Halfway to find the best midpoints!</p>
      </div>
    </div>
  </div>
</body>
</html>

<?php
// Close the MySQL connection
$conn->close();
?>
