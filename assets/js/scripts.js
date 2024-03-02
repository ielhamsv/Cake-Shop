
const Display_menu = document.getElementById("display-menu")
const menu = document.getElementById("menu")
const close = document.getElementById("close")



Display_menu.addEventListener("click", function (){
    Display_menu.style.height="0px"
    menu.style.height="70px"
    close.style.height="30px"
})

close.addEventListener("click", function (){
    Display_menu.style.height="70px"
    menu.style.height="0"
    close.style.height="0"
})




const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    }
});

