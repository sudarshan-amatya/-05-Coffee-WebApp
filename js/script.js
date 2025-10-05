// Swiper js
const swiper = new Swiper('.myswiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.home .swiper-pagination',
  },
  navigation: {
    nextEl: '.home .swiper-button-next',
    prevEl: '.home .swiper-button-prev',
  },
  on: {
    slideChangeTransitionStart() {
      const allDetails = document.querySelectorAll('.home-details');
      allDetails.forEach(el => el.classList.remove('show-details'));

      const activeSlide = document.querySelector('.swiper-slide-active .home-details');
      if (activeSlide) activeSlide.classList.add('show-details');
    }
  }
});

const revSwiper = new Swiper('.review .myswiper', {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.review .swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.review .swiper-button-next',
    prevEl: '.review .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Nav open close
const body = document.querySelector('body');
const navMenu = document.querySelector('.menu-content');
const navOpenBtn = document.querySelector('.navOpen-btn');
const navCloseBtn = document.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
  navOpenBtn.addEventListener("click", () => {
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}
if (navMenu && navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}


// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active");
  } else {
    document.querySelector("header").classList.remove("header-active");

  }

  const sections = document.querySelectorAll('section[id]');
  const scrollBottom = window.innerHeight + scrollY;

  sections.forEach((section, index) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 90;
    const navId = document.querySelector(`.menu-content a[href*=${section.id}]`);

    // Check if we're in this section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId?.classList.add("active-nav-link");
    } else {
      navId?.classList.remove("active-nav-link");
    }

    // Special case: if we're at the bottom of the page → activate footer
    if (index === sections.length - 1) {
      if (scrollBottom >= document.documentElement.scrollHeight - 10) {
        navId?.classList.add("active-nav-link");
      }
    }
  });
})


// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1500,
  delay: 100,
})
sr.reveal('.menu,.review,.section-title, .section-subtitle, .section-description, .brand-img , .testimonial,.newLetter-inputBox,.newletter-container ,.review-container')
sr.reveal(`.about-imageContent, .menu-items`, { origin: "left" })
sr.reveal(`.about-details, .time-table`, { origin: "right" })
sr.reveal(`footer`, { origin: "bottom" })
