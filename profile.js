// Function to handle profile picture upload
function uploadProfilePicture() {
    const fileInput = document.getElementById('profilePicUpload');
    const profilePic = document.getElementById('profilePic');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result; // Display the selected image
        }
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}

// Admin role check function
function isAdmin() {
    // Simple check: If username is admin, allow editing profits
    const username = 'admin@example.com'; // Replace with session/user data
    return username === 'admin@example.com';
}

// Allow only admin to edit profits
if (!isAdmin()) {
    const profits = document.querySelectorAll('.profit-details .editable');
    profits.forEach(function(profit) {
        profit.setAttribute('disabled', 'true'); // Disable editing for non-admin users
    });
}

// (Optional) You can extend this with more complex checks based on your system's user roles
