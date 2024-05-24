// DOM queries:
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');
const slider = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.galleryImg');

const indicators = document.querySelectorAll('.applications_gallery_dot')

let slide1 = galleryImages[0].src;
let slide2 = galleryImages[1].src;
let slide3 = galleryImages[2].src;
let index = 0;


nextButton.addEventListener('click', () => {
    const temp = slide1;
    slide1 = slide2;
    slide2 = slide3;
    slide3 = temp;

    // Update the image sources
    galleryImages[0].src = slide1;
    galleryImages[1].src = slide2;
    galleryImages[2].src = slide3;

    if (galleryImages[0].src === slide1) {
        galleryImages[0].classList.add = '--active';
        galleryImages[0].classList.remove = '--inactive';
        
    } else if(galleryImages[1].src === slide2) {
        galleryImages[1].classList.add = '--active';
        galleryImages[1].classList.remove = '--inactive';
        
         
        
        
    } else if(galleryImages[2].src === slide3) {
        galleryImages[2].classList.add = '--active';
        galleryImages[2].classList.remove = '--inactive';
        
        
    } else {
        galleryImages.classList.remove = '--active';
        
    }

    
});

let indicator1 = indicators[0];
let indicator2 = indicators[1];
let indicator3 = indicators[2];

// indicators.forEach(indicator => {
//     indicators.addEventListener('click', () => {
//         indicator[0] = galleryImages[0];
//     })
// });

indicator1.addEventListener('click', () => {
    indicator1 = galleryImages[1].src = galleryImages[0];
})