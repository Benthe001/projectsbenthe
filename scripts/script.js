



//functie voor openen hamburgermennu
var hamburgerButton = document.querySelector("#hamburger");
var deHeader = document.querySelector('header');

function openHamburger(){
    deHeader.classList.toggle("toonheader");
}

hamburgerButton.addEventListener("click", openHamburger);

