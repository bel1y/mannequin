function openingMenu(){
    document.querySelector(".navbar-text-media").style="top:0px"
}
function closeMenuText() {
        document.querySelector(".navbar-text-media").style="top:-1000px"
}
function closeMenu() {
    document.querySelector(".navbar-text-media").style="top:-1000px"
}
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Функция для переключения слайдов
function showSlide(index) {
  const slideWidth = slide[0].clientWidth;
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Обработчики кнопок
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
});