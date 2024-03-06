const logIcon = document.getElementById("logicon")
const logForm = document.getElementById("logform")
const closeForm = document.getElementById("close-form")
const closeForms=document.getElementById("close-forms")
const signupBtn = document.getElementById("signupbtn")
const logbtn=document.getElementById("loginbtn")
const log=document.getElementById("log")
const signup = document.getElementById("signup")
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


logIcon.addEventListener("click", function (){
    logForm.style.display="block"
})

closeForm.addEventListener("click",function (){
    logForm.style.display="none"
})
closeForms.addEventListener("click",function (){
    logForm.style.display="none"
})

signupBtn.addEventListener("click",function (){
    log.style.display="none"
    signup.style.display="block"
})

logbtn.addEventListener("click",function (){
    signup.style.display="none"
    log.style.display="block"
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

