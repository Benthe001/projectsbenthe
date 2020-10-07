



//functie voor openen hamburgermennu
var hamburgerMenu = document.querySelector("#hamburger");
var header = document.querySelector('#header');

function openHamburger(){
    header = document.querySelector('hamburger');

header.classList.toggle("toon header")
}

hamburgerMenu.addEventListener("click",openHamburger);

//function openHamburger() {
    //let header = document.querySelector() //.classList.toggle("fullpageheader");

//hamburgerMenu.addEventListener('click', openMenu);