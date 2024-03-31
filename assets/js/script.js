//  preloader
window.addEventListener("load",()=>{
    const preloader = document.querySelector(".loader");
    preloader.classList.add("hide");
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // auto play
    autoplay: {
      delay: 4000,
    },
  })


 
//  bottom to top scroll
const toTop = document.querySelector(".to-top");

const nav = document.querySelector("header nav");
console.log(nav)

window.addEventListener("scroll",()=>{
  if( window.scrollY > 100){
    toTop.classList.add("active");
    nav.style.cssText = `position : fixed;
                        top: 0; 
                        left: 0; 
                       width: 100%;
                       z-index: 1000;
                       background-color: #fff; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);`;
  }
  else{
    toTop.classList.remove("active");
    nav.style.position = "static";
  }

})

 


 
 