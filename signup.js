document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username already exists
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert("Username already exists! Please choose another username.");
        return;
    }

    // Create new user object
    const newUser = {
        name,
        address,
        phone,
        email,
        username,
        password
    };

    // Save the new user to localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    window.location.href = "login.html";  // Redirect to login page after successful signup
});
