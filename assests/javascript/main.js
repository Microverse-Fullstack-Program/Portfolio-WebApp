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

// Work history details to be display dynamically
const featureWorkData = [
  {
    image: 'assests/images/img_placeholder.png',
    imageAlt: 'my project image placeholder',
    title: 'Multi-Post Stories',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a standard dummy text.`,
    languages: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
];

const firstCard = [
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder2.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Professional Art Printing Data',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
];

const projectCards = [
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder4.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Data Dashboard Healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Website Portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder5.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Professional Art Printing Data More',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder4.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Data Dashboard Healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Website Portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
    button: ['See Project']
  },
];


const featuredWork = document.querySelector('.featured-work');
const cardsContainer = document.querySelector('.work-frame');

// Load recent works featured-work section
const printFeaturedWork = (array) => {
  const featureWorkData = array.map((cardContent) => 
    `<img  src=${cardContent.image} alt=${cardContent.imageAlt}>
    <div class="right-block">
      <h2> ${cardContent.title} </h2>
      <p> ${cardContent.desc} </p>
    
      <div class="tags">
        <ul>
          ${cardContent.languages.map((lang) => `<li>${lang}</li>`).join('')}
        </ul>
      </div>
      <button class="see-project" type="button">${cardContent.button}</button>    
    </div>
    `).join('');
    
  featuredWork.innerHTML = featureWorkData;
};

const printFirstCard = (array) => {
  const firstCardData = array.map((card) => 
    `<div class="work-cards">
        <img class="mobile-img" src=${card.mobileImg} alt="Work card image">
        <img class="desktop-img" src=${card.desktopImg} alt="Work card image">
      </div>
      <div class="card-content">
        <h2 class="firstCard"> ${card.mobileTitle} </h2>
        <p class="firstCard"> ${card.desc} </p>
                
        <div class="tags firstCard">
          <ul>
            ${card.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
        </div>
        <button type="button">${card.button}</button>
      </div>
    </div>`).join('');
    
    cardsContainer.innerHTML = firstCardData;
};

// Load recent works cards
const printCards = (array) => {
  const cardData = array.map((card) => 
    `<div class="work-cards">
      <img class="mobile-img" src=${card.mobileImg} alt="Work card image">
      <img class="desktop-img" src=${card.desktopImg} alt="Work card image">
      <div class="card-content">
        <h2 class="mob-title"> ${card.mobileTitle} </h2>
        <h2 class="desk-title"> ${card.deskTitle} </h2>
        <p class="mobile-desc desktop-desc"> ${card.desc} </p>
        
        <div class="tags">
          <ul>
            ${card.tags.map((tag) => `<li>${tag}</li>`).join('')}
          </ul>
        </div>
      </div>
      <button class="cardButton see-project" type="button" button>${card.button}</button>
    </div>`).join('');
    
    cardsContainer.innerHTML = cardData;
};

/* Load worksection dynamically on page load */
window.addEventListener('DOMContentLoaded', () => {
  printFeaturedWork(featureWorkData);
  printFirstCard(firstCard);
  printCards(projectCards);
  modalPopup();
});


// Popup window
const modalPopup = () => {
  const projectBtns = document.querySelectorAll('.see-project');
  const containers = document.querySelectorAll('.container');
  const myModal = document.querySelector('.modal-overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Show modal
  projectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      myModal.classList.add('display-modal');
      containers.forEach((container) => {
        container.classList.add('blur');
      });
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    myModal.classList.remove('display-modal');
    containers.forEach((container) => {
      container.classList.remove('blur');
    });
  });
};
