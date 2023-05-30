  // Dosering 
  // 
  const editButton = document.getElementById('editButton');
  const displayValue = document.getElementById('displayValue');

  // Add a click event listener to the button
  editButton.addEventListener('click', () => {
    // Prompt the user for a value
    const value = prompt('Enter a value:');

    // Update the display value element with the entered value
    displayValue.textContent = value;
  });