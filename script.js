// still failed :"
const activeNavbar = document.getElementById("navbar");
let height = activeNavbar.offsetHeight;
var navBar = document.getElementsByTagName("nav");

// When page scrolled down, navigation bar will follow
if (activeNavbar.scrollTop >= height){
    navBar.style.position='fixed';
}