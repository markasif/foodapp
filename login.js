function validateLogin(event) {
  event.preventDefault();

  // Get the entered username and password
  const username = document.getElementById("exampleInputEmail1").value;
  const password = document.getElementById("exampleInputPassword1").value;

  // Check if the entered username and password match the allowed values
  if (username === "asif@123" && password === "123") {
    alert("Login successful!");
    // Redirect to another page or do something else here
  } else {
    alert("Invalid username or password.");
  }
}

// Add an event listener to the login form
const loginForm = document.querySelector('.form-container');
loginForm.addEventListener('submit', validateLogin);
