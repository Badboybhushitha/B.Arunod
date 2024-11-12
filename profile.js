// Load user data from localStorage
window.onload = function() {
    const username = localStorage.getItem('userUsername');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const address = localStorage.getItem('userAddress');
    const phone = localStorage.getItem('userPhone');
    const profilePic = localStorage.getItem('profilePic');  // Assuming the profile pic URL is stored

    // Set the profile information to display on the page
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profileAddress').textContent = address;
    document.getElementById('profilePhone').textContent = phone;

    // Set the profile picture if exists
    if (profilePic) {
        document.getElementById('profilePic').src = profilePic;
    } else {
        document.getElementById('profilePic').alt = 'No profile picture set';
    }
};

// Optional: Add functionality to edit the profile (e.g., updating profile picture or other details)
document.getElementById('editProfileBtn').addEventListener('click', function() {
    // You can add functionality here to allow users to edit their profile.
    // For now, we'll just alert them.
    alert('Edit profile functionality goes here.');
});
