window.onload = function() {
    // Check if the user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'login.html'; // Redirect to login if not logged in
    }

    // Load user details from localStorage
    const username = localStorage.getItem('userUsername');
    const email = localStorage.getItem('userEmail');
    const phone = localStorage.getItem('userPhone');
    const password = localStorage.getItem('userPassword');
    const profilePic = localStorage.getItem('userProfilePic');

    // Set the profile details in the HTML
    document.getElementById('profileUsername').textContent = username;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('profilePassword').textContent = password;

    // Show the profile picture
    if (profilePic) {
        document.getElementById('profilePic').src = profilePic;
    }

    // Handle profile picture update
    document.getElementById('updateProfilePicBtn').addEventListener('click', function() {
        const newPic = document.getElementById('newProfilePic').files[0];
        if (newPic) {
            const reader = new FileReader();
            reader.onloadend = function() {
                localStorage.setItem('userProfilePic', reader.result);
                document.getElementById('profilePic').src = reader.result;
                alert('Profile picture updated!');
            };
            reader.readAsDataURL(newPic);
        } else {
            alert('No file selected');
        }
    });
};
