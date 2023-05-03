// Get form and input elements
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const email=emailInput.value;
    const password=passwordInput.value;
    console.log("Email: " + email);
    console.log("Password: " + password);
    
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    

    window.location.href="login.html";





});

