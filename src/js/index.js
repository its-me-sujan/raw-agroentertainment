const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;
const itemsPerView = 4;
const width = document.querySelector(".carousel-item").offsetWidth;

// Handle Next Button (Infinite Scroll)
nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first item after reaching the end
  }
  carousel.style.transform = `translateX(-${currentIndex * (width + 16)}px)`;
});

// Handle Prev Button (Infinite Scroll)
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - itemsPerView; // Wrap around to the last set of items
  }
  carousel.style.transform = `translateX(-${currentIndex * (width + 16)}px)`;
});
