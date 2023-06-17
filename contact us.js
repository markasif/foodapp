const form = document.querySelector('form');
const inputs = document.querySelectorAll('input, textarea');

// Add event listener to form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  // Do something with the form data (e.g. send it to a server)
  alert('Thanks for submitting the form!');
});

// Add event listeners to inputs for focus and blur events
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    // Add a class to the input's parent element when it is in focus
    input.parentNode.classList.add('input-focused');
  });
  input.addEventListener('blur', () => {
    // Remove the class from the input's parent element when it loses focus
    input.parentNode.classList.remove('input-focused');
  });
});
