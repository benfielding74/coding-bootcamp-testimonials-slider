//select the slide container and set variables for number of slides and visible slide
let testimonial = document.querySelectorAll('.slider');
(slideCount = testimonial.length), (visibleSlide = 0);

//ensures the first slide is visible when the page loads with active class
testimonial[0].classList.add('active');

//adds and removes the active class from the slides
function moveToSlide(n) {
  testimonial[visibleSlide].className = 'slider';
  visibleSlide = (n + slideCount) % slideCount;
  testimonial[visibleSlide].className = 'slider active';
}

//function to move to next slide from current slide
function nextSlide(e) {
  moveToSlide(visibleSlide + 1);
}

//function to return to previous slide
function prevSlide(e) {
  moveToSlide(visibleSlide - 1);
}

//creates the handler with event listener for the nav buttons and calls functions to move through slideshow
const navHandler = {
  nextSlide: function (element) {
    document.querySelector(element).addEventListener('click', nextSlide);
  },
  prevSlide: function (element) {
    document.querySelector(element).addEventListener('click', prevSlide);
  },
};

navHandler.nextSlide('.navNext');
navHandler.prevSlide('.navPrev');
