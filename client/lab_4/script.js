let slidePosition = 0;
const slides = document.querySelectorAll('.carousel__item');
const slidesArray = Array.from(slides);
const totalSlides = slidesArray.length;

function updateSlidePosition() {
  slidesArray.forEach((slide) => {
    console.log(slide);
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  });
  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition -1 === 0) {
    slidePosition = 0;
  } else {
    slidePosition -= 1;
  }
  updateSlidePosition();
}

document
  .querySelector('.next')
  .addEventListener('click', () => {
    console.log('clicked next');
    moveToNextSlide();
  });
document
  .querySelector('.prev')
  .addEventListener('click', () => {
    console.log('clicked prev');
    moveToPrevSlide();
  });
