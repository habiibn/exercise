// // still failed :"
// const activeNavbar = document.getElementById("navbar");
// let height = activeNavbar.offsetHeight;
// var navBar = document.getElementsByTagName("nav");

// // When page scrolled down, navigation bar will follow
// if (activeNavbar.scrollTop >= height){
//     navBar.style.position='fixed';
// }

var tombolMenu = document.getElementsByClassName("three-strips");
var menu = document.getElementsByClassName("menu");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

document.querySelector(document).ready(function () {
    var width = document.querySelector(window).width();
    if (width < 450) {
        klikMenu();
    }
})