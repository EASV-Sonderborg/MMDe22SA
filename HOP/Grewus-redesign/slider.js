// // DOM queries:
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');
const slider = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.galleryImg');
const indicators = document.querySelectorAll('.applications_gallery_dot');

//Storing the gallery images
let slides = Array.from(galleryImages).map(img => img.src);
let currentIndex = 0;

// Click event when tapping the right arrow
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateGallery();
});

// Click event when tapping the left arrow
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateGallery();
});

// forEach loop for the indicators since we have more than one that we need to be able to call upon 
indicators.forEach((indicator, idx) => {
    indicator.addEventListener('click', () => {
        currentIndex = idx;
        updateGallery();
    });
});

// Function to update the gallery depending on what you tap on. 
// It will look at what's currently displayed in the gallery and go from there
function updateGallery() {
    galleryImages.forEach((img, idx) => {
        img.src = slides[(currentIndex + idx) % slides.length];
    });

    indicators.forEach((indicator, idx) => {
        if (idx === currentIndex) {
            indicator.classList.add('--activeDot');
            indicator.classList.remove('--inactiveDot');
        } else {
            indicator.classList.add('--inactiveDot');
            indicator.classList.remove('--activeDot');
        }
    });
}

// Now we will call up the function, so its know we're ready to roll
updateGallery();
