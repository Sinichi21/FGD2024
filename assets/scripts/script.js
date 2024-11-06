// Slider functionality
let currentIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;

// Function to move to the next/previous slide
function moveSlide(direction) {
  currentIndex += direction;

  // If we reach the last slide, go back to the first
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // If we go below the first slide, jump to the last
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Move the slide container
  const offset = -currentIndex * 100; // Each slide is 100% width
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 4 seconds
setInterval(() => {
  moveSlide(1); // Move to the next slide
}, 4000);

// Manual button listeners
document.querySelector(".prev").addEventListener("click", () => {
  moveSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  moveSlide(1);
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
