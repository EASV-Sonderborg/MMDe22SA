
/* Funktion til at nedsætte opacity ved tryk på stopbutton */ 

const stopBtn = document.querySelector('.guideButton');


stopBtn.addEventListener("click", ()=> {
    stopBtn.style.filter = "opacity(50%)";
});


const finishBtn = document.querySelector('.finishButton')
const startBtn = document.querySelector('.buttonStart')

startBtn.addEventListener('click', function(){
    finishBtn.style.display = 'block';
});

