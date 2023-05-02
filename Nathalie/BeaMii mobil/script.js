/*const btnSteder = document.querySelector('.steder');
btnSteder.addEventListener('click', /** move image/video forward on layers *//*);

/*const btnViewSteder = document.querySelector('.allStudents');

function viewSteder() {
    for(i in btnViewSteder){
        console.log(btnViewSteder);
        
    }
}
//????????????????????????????????????????????



/**
 * function viewSteder() {
    for(i in students){
        console.log(students[i].name);
        const newLi = document.createElement('li');
        newLi.textContent = students[i].name;
        list.appendChild(newLi);
    }
}
phoneImages
 */


const toggleButtons = document.querySelectorAll(".toggleImages");
const localImages = document.querySelectorAll(".image_local");
const forsideImages = document.querySelectorAll(".forside");

//Fortæller om phone billedet er i front
let isLocalImageFront = true;

//addEventListener der toggler billedet alt efter hvad der er front
toggleButtons.forEach(function(toggleButton) {
  toggleButton.addEventListener("click", function() {
    if (isLocalImageFront) {
      localImages.forEach(function(localImage) {
        localImage.style.zIndex = 0;
      });
      forsideImages.forEach(function(forsideImage) {
        forsideImage.style.zIndex = 1;
      });
    } else {
      localImages.forEach(function(localImage) {
        localImage.style.zIndex = 1;
      });
      forsideImages.forEach(function(forsideImage) {
        forsideImage.style.zIndex = 0;
      });
    }

    isLocalImageFront = !isLocalImageFront;
  });
});