document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Admin credentials
    const adminUsername = 'B.Arunod';
    const adminPassword = 'bhushitha2007#';

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
        // Redirect to Admin page or Home Page
        window.location.href = "adminPage.html";  // Replace with the actual admin page URL
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
