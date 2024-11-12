// Sample Admin Credentials
const adminUsername = "B.Arunod";
const adminPassword = "bhushitha2007#";

// Check Admin Login (Simple simulation)
function loginAsAdmin(username, password) {
    return username === adminUsername && password === adminPassword;
}

// Check if Admin is logged in
function checkAdminAccess() {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isAdminLoggedIn) {
        alert("Unauthorized access. Please log in as Admin.");
        window.location.href = "login.html"; // Redirect to a login page
    }
}

// Run access check on page load
checkAdminAccess();

// Function to add a new user
function addUser(username, email, password, phone) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, email, password, phone, earnings: 0 });
    localStorage.setItem("users", JSON.stringify(users));
    alert("User added successfully.");
}

// Function to populate user dropdown for editing earnings
function populateUserDropdown() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userSelect = document.getElementById("userSelect");
    userSelect.innerHTML = "";

    users.forEach((user, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = user.username;
        userSelect.appendChild(option);
    });
}

// Update user earnings
function updateUserEarnings(userIndex, earnings) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users[userIndex]) {
        users[userIndex].earnings = earnings;
        localStorage.setItem("users", JSON.stringify(users));
        alert("User earnings updated.");
    } else {
        alert("User not found.");
    }
}

// Handle form submissions
document.getElementById("addUserForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    addUser(username, email, password, phone);
    populateUserDropdown(); // Refresh dropdown
    this.reset();
});

document.getElementById("editEarningsForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const userIndex = document.getElementById("userSelect").value;
    const earnings = document.getElementById("earnings").value;

    updateUserEarnings(userIndex, earnings);
    this.reset();
});

// Initialize user dropdown on page load
window.onload = populateUserDropdown;
