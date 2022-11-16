/* Add mobile menu on hamburger click */
const hamburger = document.querySelector('.hamburger');
const topMenu = document.querySelector('.top-nav-menu');
const NavLinks = document.querySelectorAll('.navlinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  topMenu.classList.toggle('mobile-top-nav');
});

NavLinks.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('active');
    topMenu.classList.remove('mobile-top-nav');
  });
});

/* Highlight top nav menus up on page scroll */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 300;
    sectionId = current.getAttribute("id");
    
    if (scrollY > sectionTop &&  scrollY <= sectionTop + sectionHeight){
      document.querySelector(".top-nav-menu a[href*=" + sectionId + "]").classList.add("highlight");
    } 
    else {
      document.querySelector(".top-nav-menu a[href*=" + sectionId + "]").classList.remove("highlight");
    }
  });
});
