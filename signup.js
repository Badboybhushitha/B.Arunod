// Sign-up form submission handler
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get values from form fields
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if all fields are filled
    if (username && name && email && address && phone && password && confirmPassword) {
        // Ensure that password and confirm password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Save the user details to localStorage
        localStorage.setItem('userUsername', username);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userAddress', address);
        localStorage.setItem('userPhone', phone);
        localStorage.setItem('userPassword', password);

        // Automatically log the user in by setting the user as logged in
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to the Profile page after successful sign-up
        window.location.href = 'profile.html'; // Redirect to profile page
    } else {
        alert('Please fill in all fields');
    }
});
