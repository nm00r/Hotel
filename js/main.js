////header Scroll///////////////
let nav= document.querySelector(".navbar");
window.onscroll=function (){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

////////////////////navbar////////////////
let navBar = document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})
/////////////////////////////home
const swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, 
        disableOnInteraction: false,
    },
});
//////////////////////////count/////////////////\
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj = document.getElementById(id),
        current=start,
        range=end-start,
        increase=end>start?1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current += increase;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step)
    }
    counter("count1",0,1287,3000);
    counter("count2",20,2000,3500);
    counter("count3",30,2500,4000);
    counter("count4",40,3000,5000);
})
