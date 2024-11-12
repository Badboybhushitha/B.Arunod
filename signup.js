document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const profilePic = document.getElementById('profilePic').files[0];

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Save user data in localStorage
    localStorage.setItem('userUsername', username);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userPassword', password);

    // If profile picture is selected, save it
    if (profilePic) {
        const reader = new FileReader();
        reader.onloadend = function () {
            localStorage.setItem('userProfilePic', reader.result);
        };
        reader.readAsDataURL(profilePic);
    }

    alert('Sign Up Successful!');
    window.location.href = 'login.html'; // Redirect to login page
});
