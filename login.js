document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get stored user details
    const storedUsername = localStorage.getItem('userUsername');
    const storedPassword = localStorage.getItem('userPassword');
    
    // Admin check
    const adminUsername = "admin";
    const adminPassword = "adminpassword"; // Change this to your admin credentials

    // Check if the username and password are correct
    if ((loginUsername === storedUsername && loginPassword === storedPassword) ||
        (loginUsername === adminUsername && loginPassword === adminPassword)) {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'profile.html';
    } else {
        alert('Invalid credentials');
    }
});
