const panelBtn = document.getElementById('btn-panel');
const panelDesc = document.getElementById('panel-description');

panelBtn.addEventListener('mouseenter', function() {
  panelDesc.classList.add('show');
  panelBtn.classList.add('show');
});

panelBtn.addEventListener('mouseleave', function() {
  panelDesc.classList.remove('show');
  panelBtn.classList.remove('show');
});

panelBtn.addEventListener('click', function() {
  panelDesc.classList.toggle('show');
  panelBtn.classList.toggle('show');
});

// -----------------------------------------------------//

const logoText = document.querySelector('.logo-text');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('mouseenter', () => {
  logoText.classList.add('hover-effect');
  menuBtn.classList.add('hover-effect');
});

menuBtn.addEventListener('mouseleave', () => {
  logoText.classList.remove('hover-effect');
  menuBtn.classList.remove('hover-effect');
});

logoText.addEventListener('mouseenter', () => {
  menuBtn.classList.add('hover-effect');
  logoText.classList.add('hover-effect');
});

logoText.addEventListener('mouseleave', () => {
  menuBtn.classList.remove('hover-effect');
  logoText.classList.remove('hover-effect');
});

//*-----------------------------------------//

// Variables globales
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");

// Función para avanzar o retroceder en las imágenes
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para mostrar una imagen en particular
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Función principal para mostrar las imágenes
function showSlides() {
  var i;
  
  // Reiniciar si llegamos al final de las imágenes
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  
  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // Mostrar la imagen actual
  slides[slideIndex-1].style.display = "block";  
  
  // Avanzar a la siguiente imagen después de 10 segundos
  setTimeout(function(){plusSlides(1)}, 10000); 
}

// Mostrar la primera imagen
showSlides(slideIndex);

/*CODIGO CARRUSEL*/
const carousel = document.querySelector('.carousel');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const container = carousel.querySelector('.carousel-container');
const slideWidth = carousel.clientWidth;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  if (currentIndex < 2) {
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});