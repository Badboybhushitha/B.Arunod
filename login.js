// Login form submission handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from login form
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get user data from localStorage
    const storedUsername = localStorage.getItem('userUsername');
    const storedPassword = localStorage.getItem('userPassword');

    // Validate the login details
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        // If credentials are correct, log the user in and set login status
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the Profile page
        window.location.href = 'profile.html';
    } else {
        // If login fails, show an error message
        alert('Invalid Username or Password');
    }
});
