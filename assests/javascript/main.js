const hamburger = document.querySelector('.hamburger');
const topMobileMenu = document.querySelector('.mobile-top-nav');
const crossIcon = document.querySelector('.cross-Icon');
const NavLinks = document.querySelectorAll('.navlinks-mobile');


function toggleNav() {
    topMobileMenu.classList.toggle('flex-display');
}

hamburger.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);



