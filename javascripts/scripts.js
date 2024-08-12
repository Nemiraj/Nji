const sliderItems = document.querySelectorAll('.slider__item');
const paginationItems = document.querySelectorAll('.slider__page-item');
let currentSlide = 0;

function showSlide(n) {
  // Hide all slides
  sliderItems.forEach(item => item.classList.remove('slider_item--active'));

  // Show the specified slide
  sliderItems[n].classList.add('slider_item--active');

  // Update the active pagination dot
  paginationItems.forEach(item => item.classList.remove('slider_page-item--active'));
  paginationItems[n].classList.add('slider_page-item--active');
}

// Event listeners for pagination dots
paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showSlide(index);
    currentSlide = index;
  });
});