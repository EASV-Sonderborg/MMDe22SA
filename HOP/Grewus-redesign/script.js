const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}





const header = document.querySelector('header')
const logo = document.querySelector('.nav-logo');
const nav = document.querySelector('nav'); // Add this line to select the navigation element

// Get the actual height of the logo
const logoHeight = logo.clientHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        // Navbar should stick to the top
        nav.style.position = 'fixed';
        nav.style.top = '0';
        logo.style.opacity = '0';
    } else {
        // Reset the navbar position
        nav.style.position = 'static';
        logo.style.opacity = '1';
        nav.style.height = `${logoHeight}px`;
        nav.style.height = ''; // Reset the height
    }
});