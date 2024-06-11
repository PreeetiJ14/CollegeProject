document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menuzord-menu');
    const menuItems = menu.querySelectorAll('a');
  
    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  
    // Close the menu when a menu item is clicked
    menuToggle.forEach(function (menuToggle) {
      menuItem.addEventListener('click', function () {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
        }
      });
    });
  });