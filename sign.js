
var form = document.querySelector("form");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loginButton = document.getElementById("loginb");


loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    const enteredEmail = emailInput.value;
    const enteredPassword = passwordInput.value;

    if (storedEmail === enteredEmail && storedPassword === enteredPassword) {
        alert("Login successful!");
        // Redirect to homepage or other desired location
        window.location.href="homepage.html"
    } else {
        alert("password doesn't match you cheeky boy");
    }
});
