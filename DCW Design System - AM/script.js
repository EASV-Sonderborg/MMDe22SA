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


//Json indhold som skal bruges til at ændre alerts

const fetchPromise = fetch('errorcode.json');

fetchPromise
    .then(response => {
        if (!response.ok) { // hvis der ikke kommer svar fra serveren, giver den en fejlmeddelelse
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json(); // hvis alt er ok, så fortsætter scriptet 
    })
    .then(json => {
        const result = json.errorcodes; // API'et returnerer JSON data og vi lægger det i result
        console.log(result); // result er et array med 12 elementer
        for(const el of result){ // for...of loop af arrayet
            console.log(el); // her kan man se alle elementer i arrayet
        }

        // Add text content to h2: 
        const errorStatus = document.querySelector('.errorcode__status');
        errorStatus.textContent = `Status: ${result[2].status}`;
        const section = document.querySelector('.errorcode');
        if (result[2].severity === 'Good') {
            section.classList.add('good');
        }
            
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });