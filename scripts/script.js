// eerst declareer ik de variabelen voor alle elementen in de HTML die een rol spelen in dit script
var hamburgerButton = document.querySelector("#hamburger");
var deHeader = document.querySelector('header');

var buttonFilmpje = document.querySelector("#knopfilm");
var filmPagina = document.querySelector('.sectiontoonfilmpje');

var kruisButton = document.querySelector("#kruisbuttonfilmpje");



// eventHandlers, deze functies veranderen iets aan de pagina. 

function openHamburger() {
    deHeader.classList.toggle("toonheader");
}

function openFilmpje() {
    filmPagina.classList.toggle("toonfilm");
}


// eventListeners, de knoppen luisteren naar de 'click' en als ie een 'click' hoort dan roept ie de eventHandler-functies aan
hamburgerButton.addEventListener("click", openHamburger);
buttonFilmpje.addEventListener("click", openFilmpje);
kruisButton.addEventListener("click", openFilmpje);
