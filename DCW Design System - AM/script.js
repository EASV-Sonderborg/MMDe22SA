// Get all the buttons with the class name "btn"
const buttons = document.querySelectorAll('.btn');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Reduce the saturation of the pressed button
    button.style.filter = 'saturate(50%)';
    
    // Reset the saturation after 500 milliseconds (0.5 seconds)
    setTimeout(() => {
      button.style.filter = 'none';
    }, 500);
  });
});