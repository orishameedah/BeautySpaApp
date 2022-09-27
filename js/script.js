const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        console.log(toggle);
        console.log(nav);
        
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show'); //javascript css to display nav menu
            })
        }
};
showMenu('menu-btn','nav_menu')

const navLink = document.querySelectorAll('.nav__link');

console.log({ navLink });

function linkAction() {
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show'); //when we click on each nav__link, we remove the show class
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

var swiper = new Swiper(".skincare-slider", {
    grabCursor : true,
    loop : true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        },
      700: {
        slidesPerView: 2,
        },
      1000: {
        slidesPerView: 3,
        },
    },
  });
 
  var swiper = new Swiper(".cosmetics-slider", {
    grabCursor : true,
    loop : true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        },
      700: {
        slidesPerView: 2,
        },
      1000: {
        slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".nailpolish-slider", {
    grabCursor : true,
    loop : true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        },
      700: {
        slidesPerView: 2,
        },
      1000: {
        slidesPerView: 3,
        },
    },
  });

  