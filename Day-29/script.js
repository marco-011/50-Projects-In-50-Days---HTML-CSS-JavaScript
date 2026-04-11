// Select the main container where hearts will appear
const loveMe = document.querySelector(".loveMe");

// Select the element that shows total likes
const times = document.querySelector("#times");

// Variable to store number of times double-clicked
let timesClicked = 0;

// Listen for double-click event on the container
loveMe.addEventListener("dblclick", (e) => {
  createHeart(e); // Call function and pass event
});

// Function to create heart at clicked position
const createHeart = (e) => {
  
  // Create <i> element (Font Awesome heart icon)
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  // Get mouse click position (relative to screen)
  const x = e.clientX;
  const y = e.clientY;

  // Get container position
  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;

  // Calculate position inside the container
  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  // Set heart position (IMPORTANT)
  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  // Add heart into container
  loveMe.appendChild(heart);

  // Increase like counter
  times.innerHTML = ++timesClicked;

  // Remove heart after 1 second
  setTimeout(() => heart.remove(), 1000);
};
