let burger=document.querySelector(".burger");
let  navbar=document.querySelector(".navbar");
let  rightnav=document.querySelector(".rightnav");
let  navlist=document.querySelector(".nav-list");

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
});