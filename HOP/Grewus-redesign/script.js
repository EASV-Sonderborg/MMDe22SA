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
const logo = document.querySelector('.nav-logo')
const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        setTimeout(() => {
            logo.style.transition = 'opacity 0.5s ease-out';
            logo.style.opacity = '0';
        }, 100);
        
        // Adjust the navbar position smoothly
        nav.style.transition = 'top 0.5s ease-out';
        nav.style.top = '0';
        
        logo.style.display = 'none';
        logo.style.top = '-100px'
    } else {
        logo.style.display = 'block';
        nav.style.top = ''; // Reset the top position of the nav

        // Display the logo smoothly
        setTimeout(() => {
            logo.style.transition = 'opacity 0.5s ease-in';
            logo.style.opacity = '1';
        }, 100);

        // Reset the navbar position smoothly
        setTimeout(() => {
            nav.style.transition = 'top 0.5s ease-in';
            nav.style.top = '';
        }, 100); // Delay the navbar transition to avoid competing with the logo transition
    }
});