const menuItems = document.querySelectorAll('.menu-item');

// Toggle sub-menu
function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  subMenu.classList.toggle('active');
}

// Attach event listener to each menu item
menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', toggleSubMenu);
});
