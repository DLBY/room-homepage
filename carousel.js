let swipePrev = document.getElementById('prev');
let swipeNext = document.getElementById('next');
let carouselContent = document.getElementById('carouselContent');

let currentSlide = 1;
let currentSlideContent = 1;

const showSlide = (slideIndex) => {
  const slides = document.getElementsByClassName('header__img-container');
  
  if (slideIndex > slides.length) {
    currentSlide = 1;
  }
  if (slideIndex < 1) {
    currentSlide = slides.length
  }
  for (let i =0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[currentSlide - 1].style.display='flex'
}

const showSlideContent = (slideIndexContent) => {
  const slidesContent = document.getElementsByClassName('card__slider');
  
  if (slideIndexContent > slidesContent.length) {
    currentSlideContent = 1;
  }
  if (slideIndexContent < 1) {
    currentSlideContent = slidesContent.length
  }
  for (let i =0; i < slidesContent.length; i++) {
    slidesContent[i].style.display = 'none'
  }
  slidesContent[currentSlideContent - 1].style.display='flex'
}

const previousSlide = () => {
  showSlide(currentSlide -= 1);
  showSlideContent(currentSlideContent -= 1);
}
const nextSlide = () => {
  showSlide(currentSlide += 1);
  showSlideContent(currentSlideContent += 1);
}

window.onload = () => {
  showSlide(currentSlide);
  showSlideContent(currentSlideContent);

  swipePrev.addEventListener('click', () => {
    previousSlide();
  })
  swipeNext.addEventListener('click', () => {
    nextSlide();
  })
}