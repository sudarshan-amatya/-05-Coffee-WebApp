// Swiper js
const swiper = new Swiper('.myswiper', {
  // Optional parameters
  slidesPerView:1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.home .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.home .swiper-button-next',
    prevEl: '.home .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const revSwiper = new Swiper('.review .myswiper', {
  // Optional parameters
  slidesPerView:1,
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

if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click",()=>{
        navMenu.classList.add("open");
        body.style.overflowY ="hidden";
    })
}
if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click",()=>{
        navMenu.classList.remove("open");
        body.style.overflowY ="scroll";
    })
}


// Change header bg color


// Scroll up button
  
  
  
// Nav link indicator
 
  
// Scroll Reveal Animation
  