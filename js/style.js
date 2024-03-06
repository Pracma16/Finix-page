$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('.parallax-section').css('background-position', 'center ' + (-scrollPosition * 0.5) + 'px');
    });
});

window.onload = function(){
    $('#onload').fadeOut(); 
}


/*import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)
root.render('Hola que tal')*/


// Mostrar el botón cuando el usuario se desplace hacia abajo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// Al hacer clic, volver al inicio de la página suavemente
document.getElementById('backToTop').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});
