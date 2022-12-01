// When page scrolled down, navigation bar will follow
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  }
  else {
    navbar.classList.remove("sticky");
  }
}

// When windows width less than 500px navbar will shrink
var tombolMenu = document.getElementsByClassName("three-strips");
var menu = document.getElementsByClassName("link-menu");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}