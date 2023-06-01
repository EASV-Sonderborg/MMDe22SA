
/* Funktion til at nedsætte opacity ved tryk på stopbutton */ 

const stopBtn = document.querySelector('.guideButton');


stopBtn.addEventListener("click", ()=> {
    stopBtn.style.filter = "opacity(50%)";
});



function updateProgressBar(progressBar, value) {
    value = Math.round(value);
    progressBar.querySelector(".progress__fill").style.width = `${value}%`; 
    progressBar.querySelector(".progress__text").textContent = `${value}%`; 
}