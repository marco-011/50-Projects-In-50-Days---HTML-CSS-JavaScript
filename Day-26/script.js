// Select main slider container
const sliderContainer = document.querySelector(".slider-container");

// Select right and left slide sections
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

// Select control buttons
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Count total number of slides (divs inside right slide)
const slidesLength = slideRight.querySelectorAll("div").length;

// Track current active slide index
let activeSlideIndex = 0;

// Fix initial position of left slide (start from bottom)
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add click event for up button (move slide up)
upButton.addEventListener("click", () => changeSlide("up"));

// Add click event for down button (move slide down)
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change slide based on direction
const changeSlide = (direction) => {
  
  // Get height of slider container (used for movement)
  const sliderHeight = sliderContainer.clientHeight;

  // If user clicks "up"
  if (direction === "up") {
    activeSlideIndex++; // move to next slide

    // If exceeds last slide, reset to first (loop effect)
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } 
  // If user clicks "down"
  else if (direction === "down") {
    activeSlideIndex--; // move to previous slide

    // If goes below first slide, go to last (loop effect)
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Move right slide UP (negative direction)
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

  // Move left slide DOWN (positive direction, opposite effect)
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
