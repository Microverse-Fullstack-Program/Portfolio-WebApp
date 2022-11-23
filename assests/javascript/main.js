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
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Professional Art Printing Data',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
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
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Website Portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder5.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Professional Art Printing Data More',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder4.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Data Dashboard Healthcare',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    mobileImg: 'assests/images/mask_group.png',
    desktopImg: 'assests/images/img_placeholder3.png',
    mobileTitle: 'Professional Art Printing Data',
    deskTitle: 'Website Portfolio',
    desc: `A daily selection of privately personalized reads; 
    no accounts or sign-ups required. has been the industry's standard`,
    tags: ['HTML', 'Bootstrap', 'Ruby'],
  },
];

const featuredWork = document.querySelector('.featured-work');
const gridContainer = document.querySelector('.work-grid');

// Load featured-work
const printFeaturedWork = (array) => {
  const featuredWorkData = array.map((cardsData) => 
  `<div class="mob-Placeholder"><img  src=${cardsData.mobileImg} alt="Work card image"></div>
    <div class="desk-Placeholder"><img  src=${cardsData.desktopImg} alt="Work card image"></div>
    <div class="right-block">
        <h2 class="workTitle">${cardsData.title}</h2>
        <p class="workDesc">${cardsData.desc}</p>
        <div>
          <ul class="tags">
              ${cardsData.tags.map((lang) => `<li class="lang">${lang}</li>`).join('')}
          </ul>
        </div>
        
        <div>
            <button class="see-project button" >
                see project
            </button>
        </div>
    </div>`).join('');

  featuredWork.innerHTML = featuredWorkData;
};

// Load first card
const printCardOne = (array) => {
  const cardOneData = array.map((cardsData) => 
  `<div class="work-cards">
      <div class="card-img">
          <img class="mobile-img" src=${cardsData.mobileImg} alt="Work card image">
          <img class="desktop-img" src=${cardsData.desktopImg} alt="Work card image">
      </div>

      <div class="card-content">
          <div class="showCard-text hide-text">
              <p class="mobile-para">${cardsData.mobileTitle}</p>
              <p class="desktop-para">${cardsData.deskTitle}</p>
         </div>
    
          <div class="card-desc cardOneDesc">
            <p> ${cardsData.desc} </p>
          </div>

          <div class="cardOneTags">
              <ul class="tags">
                      ${cardsData.tags.map((tag) => `<li class="lang">${tag}</li>`).join('')}
              </ul>
          </div>
            <button class="see-project button"> See Project </button>
      </div>
 </div>`).join('');

  gridContainer.innerHTML = cardOneData;
};

// Load the rest of the cards
const printWProjectCards = (array) => {
  const projectsCardData = array.map((cardsData) =>
`  <div class="work-cards">
      <div class="card-img">
          <img class="mobile-img" src=${cardsData.mobileImg} alt="Work card image">
          <img class="desktop-img" src=${cardsData.desktopImg} alt="Work card image">
      </div>

      <div class="card-content">
        <div class="showCard-text hideCard-text">
            <p class="mobile-para">${cardsData.mobileTitle}</p>
            <p class="desktop-para">${cardsData.deskTitle}</p>
        </div>

        <div class="card-desc">
          <p> ${cardsData.desc} </p>
        </div>

        <div>
          <ul class="tags">
              ${cardsData.tags.map((tag) => `<li class="lang">${tag}</li>`).join('')}
          </ul>
        </div>

          <button class="see-project hide-btn" type="button"> See Project </button>
      </div>
    </div>`).join('');

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
  printWProjectCards(projectCards);
  modalPopup();
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
