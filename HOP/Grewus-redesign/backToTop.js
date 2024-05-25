// back to top
const backtotop = document.querySelector('.backToTop')
window.innerHeight = '100vh';

function toggleBackToTop() {
    if (window.scrollY > 500) {
        backtotop.style.display = 'block';
    } else if (window.scrollY < 150) {
        backtotop.style.display = 'none';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', toggleBackToTop);

// Smooth scroll to top on button click
backtotop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initial check in case the page is already scrolled
toggleBackToTop();