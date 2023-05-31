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
        const orpValue = document.querySelector('.value__orp');
        // Status kasser
        const statusBox = document.querySelectorAll('.status__area');

        // Notice info kasse
        const noticeBox = document.querySelectorAll('.status__info');
        
        //Notice info tekst
        const noticeInfoDosering = document.querySelector('.dosering');
        const noticeInfoDrift = document.querySelector('.drift')
        //const noticeInfo = document.querySelectorAll('.status__info')

        // Get a random element from the result array:
        const randomNumber = Math.floor(Math.random()* result.length);
        console.log(randomNumber);


        //Conditional statement 
        if (result[randomNumber].severity === 'Good') {
            orpStatus.classList.add('--default');
            orpValue.textContent = '550';

                statusBox.forEach(statusBox => {
                    statusBox.classList.add('--default');
                });

                noticeBox.forEach(noticeBox => {
                    noticeBox.classList.add('--defaultNotice')
                });

            noticeInfoDrift.textContent = `${result[randomNumber].status}`;
            noticeInfoDosering.textContent = `${result[randomNumber].status}`;

        } else if (result[randomNumber].severity === 'Notice') {
            orpStatus.classList.add('--warning');
            orpValue.textContent = '250';

            statusBox.forEach(statusBox => {
                statusBox.classList.add('--warning');
            });

            noticeBox.forEach(noticeBox => {
                noticeBox.classList.add('--warningNotice')
            })

            noticeInfoDrift.textContent = `${result[randomNumber].status}`;
            noticeInfoDosering.textContent = `${result[randomNumber].status}`;
            
        } else if (result[randomNumber].severity === 'Warning') {
            orpStatus.classList.add('--error');
            orpValue.textContent = '99';

            statusBox.forEach(statusBox => {
                statusBox.classList.add('--error');
            });

            noticeBox.forEach(noticeBox => {
                noticeBox.classList.add('--warningNotice')
            })

            noticeInfoDrift.textContent = `${result[randomNumber].status}`;
            noticeInfoDosering.textContent = `${result[randomNumber].status}`;
    
        } 

        
    })
    .catch(error => {
        console.error(`Could not get products: ${error}`);
    });