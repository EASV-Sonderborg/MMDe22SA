// Drift 

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

        // Add text content to h2: Skifter status-farve i orp processen 
        //Status - Orp værdi + status 
        const orpStatus = document.querySelector('.value__status'); 
        const orpValue = document.querySelector('.value__orp')

        //Notice bokse
        const noticeBox = document.querySelectorAll('.status__info')
        const status = document.querySelectorAll('.status')

        if (result[2].severity === 'Good') {
            orpStatus.classList.add('--default');
            orpValue.textContent = '550';
        } else if (result[2].severity === 'Notice') {
            orpStatus.classList.add('--warning');
            orpValue.textContent = '250';
        } else if (result[2].severity === 'Warning') {
            orpStatus.classList.add('--error');
            orpValue.textContent = '99';
        } 
    
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });