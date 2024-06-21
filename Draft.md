 
 <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <!-- Add more navigation links as needed -->
      </ul>
    </nav>
 
 
 <div class="form-container">
        <form action="process_registration.php" method="post" class="form">
          <h2>Sign Up</h2>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" minlength="8" required>
          <label for="confirm_password">Confirm Password:</label>
          <input type="password" id="confirm_password" name="confirm_password" minlength="8" required>
          <input type="submit" value="Sign Up">
          <p>Have an account? <a href="Login.html">Log In</a></p>
        </form>
      </div>
