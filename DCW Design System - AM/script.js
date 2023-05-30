const subMenus = document.querySelectorAll('.sub-menu');

subMenus.forEach(function (subMenu) {
    const link = subMenu.querySelector('a');
    const ul = subMenu.querySelector('ul');
    

    ul.style.display = 'none';

    link.addEventListener('click', function () {
        ul.style.display = (ul.style.display === 'none') ? 'block' : 'none';
        
    });
});
