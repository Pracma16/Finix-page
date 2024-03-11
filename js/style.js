/*Efecto parallax*/
$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        $('.parallax-section').css('background-position', 'center ' + (-scrollPosition * 0.5) + 'px');
    });
});

window.onload = function(){
    $('#onload').fadeOut(); 
}

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

/*Boton Hamburguesa */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const navLinks = document.querySelectorAll(".nav__link");

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Ocultar el menú al hacer clic fuera de él
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !abrir.contains(e.target)) {
        nav.classList.remove("visible");
    }
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

/*Calificacion con estrellas*/

document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('change', (e) => {
        const ratingValue = e.target.value;
        const ratingId = rating.dataset.ratingId;
        console.log(`Rating for ${ratingId}: ${ratingValue}`);
    });
});
