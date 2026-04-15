// Select the image container (this moves left/right)
const imgs = document.getElementById("imgs"); 

// Select all images inside container (to count total images)
const imgElements = document.querySelectorAll("#imgs img");

// Select buttons
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

// Current image index (starts from first image)
let idx = 0;

// Auto-slide every 2 seconds
let interval = setInterval(run, 2000);

// Function that runs automatically
function run() {
  idx++;            // move to next image
  changeImage();    // update position
}

// Function to change image position
function changeImage() {

  // If index exceeds last image → reset to first
  if (idx > imgElements.length - 1) {
    idx = 0;
  } 
  // If index goes below 0 → go to last image
  else if (idx < 0) {
    idx = imgElements.length - 1;
  }

  // Move container using translateX
  // Example: 0px, -500px, -1000px, etc.
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Reset auto-slide timer when user clicks button
function resetInterval() {
  clearInterval(interval);          // stop current timer
  interval = setInterval(run, 2000); // restart timer
}

// NEXT button (→)
rightBtn.addEventListener("click", () => {
  idx++;            // go forward
  changeImage();    // update image
  resetInterval();  // reset timer
});

// PREVIOUS button (←)
leftBtn.addEventListener("click", () => {
  idx--;            // go backward
  changeImage();    // update image
  resetInterval();  // reset timer
});
