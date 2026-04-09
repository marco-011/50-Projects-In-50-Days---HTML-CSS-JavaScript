// Select the <body> element
const body = document.querySelector('body');

// Select all elements with class 'slide' (NodeList)
const slides = document.querySelectorAll('.slide');

// Select left arrow button by ID
const leftBtn = document.getElementById('left');

// Select right arrow button by ID
const rightBtn = document.getElementById('right');

// Track which slide is currently active (start from first slide)
let activeSlide = 0;

// Set initial background when page loads
setBgToBody();


// 👉 RIGHT BUTTON CLICK
rightBtn.addEventListener('click', () => {

    // Move to next slide
    activeSlide++;

    // If it goes beyond last slide → go back to first
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    // Update background image
    setBgToBody();

    // Update active slide class
    setActiveSlide();
});


// 👉 LEFT BUTTON CLICK
leftBtn.addEventListener('click', () => {

    // Move to previous slide
    activeSlide--;

    // If it goes before first slide → go to last slide
    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    // Update background image
    setBgToBody();

    // Update active slide class
    setActiveSlide();
});


// 👉 FUNCTION: Set background image to body
function setBgToBody() {
    // Take background image from current slide
    // and apply it to body
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


// 👉 FUNCTION: Highlight active slide
function setActiveSlide() {

    // Remove 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add 'active' class to current slide
    slides[activeSlide].classList.add('active');
}