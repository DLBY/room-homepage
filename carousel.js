let swipePrev = document.getElementById('prev');
let swipeNext = document.getElementById('next');
let carouselContent = document.getElementById('carouselContent');

let currentSlide = 1;

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

const previousSlide = () => {
  showSlide(currentSlide += 1);
}
const nextSlide = () => {
  showSlide(currentSlide += 1);
}

window.onload = () => {
  showSlide(currentSlide);
  swipePrev.addEventListener('click', () => {
    previousSlide();
  })
  swipeNext.addEventListener('click', () => {
    nextSlide();
  })
}