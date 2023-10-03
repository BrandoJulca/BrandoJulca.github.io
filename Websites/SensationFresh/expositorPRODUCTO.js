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
