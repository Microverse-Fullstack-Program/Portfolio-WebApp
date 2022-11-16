/* Add mobile menu on hamburger click */
const hamburger = document.querySelector('.hamburger');
const topMenu = document.querySelector('.top-nav-menu');
const NavLinks = document.querySelectorAll('.navlinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topMenu.classList.toggle('mobile-top-nav');
  });
  
