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




// Filter section
document.getElementById('area_button').addEventListener('click', function() {
    toggleSubFilters('area_sub_filters');
});
document.getElementById('group_button').addEventListener('click', function() {
    toggleSubFilters('group_sub_filters');
});
document.getElementById('subgroup_button').addEventListener('click', function() {
    toggleSubFilters('subgroup_sub_filters');
});
  
function toggleSubFilters(id) {
    const selectedSubFilters = document.getElementById(id);
    if (selectedSubFilters.style.display === 'flex') {
      selectedSubFilters.style.display = 'none';
    } else {
      const subFilters = document.getElementsByClassName('sub_filters');
      for (let i = 0; i < subFilters.length; i++) {
        subFilters[i].style.display = 'none';
      }
      selectedSubFilters.style.display = 'flex';
    }
}




// Select all buttons with the class 'info-button'
const buttons = document.querySelectorAll('.products_button');

    // Add event listeners to each button
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (index === 0) {
              // Do something special for the first buttonalert('You clicked the first button!');
            } else {
              // Do something else for other buttonsalert(`You clicked button ${index + 1}`);
            }
        });
    });


