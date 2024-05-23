// DOM queries:
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');
const slider = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.galleryImg');

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
        galleryImages[0].class.add = '--active';
        galleryImages[0].class.remove = '--inactive';
    } else if(galleryImages[1].src === slide2) {
        galleryImages[1].class.add = '--active';
        galleryImages[1].class.remove = '--inactive';
    } else if(galleryImages[2].src === slide3) {
        galleryImages[2].class.add = '--active';
        galleryImages[2].class.remove = '--inactive';
    } else {
        galleryImages.class.remove = '--active';
        
    }

});
