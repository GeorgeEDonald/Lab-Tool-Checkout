<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="welcome-page">
  <div class="welcome-container">
    <img src="MeetMeHalfway.png" alt="Meet Me Halfway Logo" class="welcome-logo">
    <h1> Meet Me Halfway</h1>
    <button onclick="navigateToMain()" class="btn-get-started">Get Started</button>
  </div>

  <script>
    function navigateToMain() {
      window.location.href = 'login.php'; // Redirects to login page
      
    }
  </script>
</body>
</html>
