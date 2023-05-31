
/* Funktion til at nedsætte opacity ved tryk på stopbutton */ 

const stopBtn = document.querySelector('.guideButton');


stopBtn.addEventListener("click", ()=> {
    stopBtn.style.filter = "opacity(50%)";
});