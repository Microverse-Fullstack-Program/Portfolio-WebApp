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

/* Form validation */
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener("submit", (event)=>{
  let emailInput = contactForm.elements['email'];
  let errorMsg =  document.getElementById('errorMsg');

  /* check if the email is all in lower case or not */
	if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg.classList.add('errorMessage');
    errorMsg.innerText = "Please enter the email address in lowercase!";
  }
  else {
    errorMsg.classList.remove('errorMessage');
    contactForm.submit()
  }
});


/* Select input elements to capture data */
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Retrive data in localStorage
function loadLocalStorage() {
  const contactData = JSON.parse(window.localStorage.getItem('contactData'));
  if (contactData) {
    nameInput.value = contactData.name;
    emailInput.value = contactData.email;
    messageInput.value = contactData.message;
  }
}

// Save in the local storage onchnage of the windowa */
function onFormChange(e) {
  let contactData = JSON.parse(window.localStorage.getItem('contactData'));

  if (!contactData) {
    contactData = {};
  }
 
  const key = e.target.name;
  contactData[key] = e.target.value;
  contactData = JSON.stringify(contactData);
  window.localStorage.setItem('contactData', contactData);
}

nameInput.addEventListener('change', onFormChange);
emailInput.addEventListener('change', onFormChange);
messageInput.addEventListener('change', onFormChange);

// Load data in DOM on windows load 
window.onload = () => {
  loadLocalStorage();
};


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
