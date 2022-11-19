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
const featuredWorkRecord = [
  {
    mobileImg: 'assests/images/mob-featuredwork-placeholder.png',
    desktopImg: 'assests/images/desk-featuredwork-placeholder.png',
    title: 'Multi-Post Stories',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's 
    standard dummy text ever since the 1500s, when an unknown 
    printer took a standard dummy text.`,
    tags: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  },
];

const firstCard = [
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder2.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'professional art printing data',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
];

const projectCards = [
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder4.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'data dashboard healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'website portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder5.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'professional art printing data more',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder4.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'data dashboard healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'professional art printing data',
    deskTitle: 'website portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
];

const featuredWork = document.querySelector('.featured-work');
const gridContainer = document.querySelector('.grid-container');

// Load featured-work
const printFeaturedWork = (array) => {
  const featuredWorkString = array.map((cardsData) => 
  `<div class="mob-img"><img  src=${cardsData.mobileImg} alt="Work card image"></div>
    <div class="desk-img"><img  src=${cardsData.desktopImg} alt="Work card image"></div>
    <div class="right-block">
        <h2 class="workTitle">${cardsData.title}</h2>
        <p class="workDesc">${cardsData.desc}</p>
        
        <ul class="tags">
            ${cardsData.tags.map((lang) => `<li class="lang">${lang}</li>`).join('')}
        </ul>
        
        <div class="workBtn-center">
            <button class="workBtn see-project button" >
                see project
            </button>
        </div>
    </div>`)
    .join('');
  featuredWork.innerHTML = featuredWorkString;
};

// Load first card
const printCardOne = (array) => {
  const cardOneData = array.map((cardsData) => `<div class="grid-item">
    <div class="card-img">
        <img class="mob-img" src=${cardsData.mobileImg} alt="Work card image">
        <img class="desk-img" src=${cardsData.desktopImg} alt="Work card image">
    </div>
    <div class="card-content">
        <div class="card-text hide-text">
            <div class="card-title">
                <p class="mobile-para">${cardsData.mobileTitle}</p>
                <p class="desktop-para">${cardsData.deskTitle}</p>
            </div>
            <div class="card-desc">
                <p>
                    ${cardsData.desc}
                </p>
            </div>
            <div>
                <ul class="tags">
                    ${cardsData.tags.map((tag) => `<li class="lang">${tag}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button" >
                see project
            </button>
        </div>
    </div>
</div>`)
    .join('');
  gridContainer.innerHTML = cardOneData;
};

// Load the rest of the cards
const printWProjectCard = (array) => {
  const projectsCardData = array.map((cardsData) => `<div class="grid-item">
    <div class="card-img">
        <img class="mob-img" src=${cardsData.mobileImg} alt="Work card image">
        <img class="desk-img" src=${cardsData.desktopImg} alt="Work card image">
    </div>
    <div class="card-content">
        <div class="card-text">
            <div class="card-title">
                <p class="mobile-para">${cardsData.mobileTitle}</p>
                <p class="desktop-para">${cardsData.deskTitle}</p>
            </div>
            <div class="card-desc">
                <p>
                    ${cardsData.desc}
                </p>
            </div>
            <div>
                <ul class="tags">
                ${cardsData.tags.map((tag) => `<li class="lang">${tag}</li>`).join('')} 
                </ul>
            </div>
        </div>
        <div>
            <button class="card-btn see-project button hide-btn" >
                see project
            </button>
        </div>
    </div>
</div>`)
    .join('');
  gridContainer.innerHTML += projectsCardData;
};

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

window.addEventListener('DOMContentLoaded', () => {
  printFeaturedWork(featuredWorkRecord);
  printCardOne(firstCard);
  printWProjectCard(projectCards);
  modalPopup();
});