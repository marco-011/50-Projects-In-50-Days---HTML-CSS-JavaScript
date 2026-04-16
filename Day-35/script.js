// Get the main container where squares will be added
const container = document.getElementById("container");

// Array of colors used for hover effect
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

// Total number of squares to create
const SQUARES = 500;

// Loop to create 500 square divs
for (let i = 0; i < SQUARES; i++) {

  // Create a new div element
  const square = document.createElement("div");

  // Add class 'square' for styling (CSS)
  square.classList.add("square");

  // When mouse hovers over square → change color
  square.addEventListener("mouseover", () => setColor(square));

  // When mouse leaves → remove color
  square.addEventListener("mouseout", () => removeColor(square));

  // Add square to container
  container.appendChild(square);
}

// Function to apply random color + glow effect
function setColor(element) {

  // Get a random color
  const color = getRandomColor();

  // Set background color
  element.style.backgroundColor = color;

  // Add glowing shadow effect
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Function to reset square back to default
function removeColor(element) {

  // Set dark background
  element.style.backgroundColor = "#1d1d1d";

  // Remove glow (keep minimal shadow)
  element.style.boxShadow = `0 0 2px #000`;
}

// Function to pick a random color from array
function getRandomColor() {

  // Math.random() → random number (0 to 1)
  // Multiply by colors length → range
  // Math.floor → whole number index
  return colors[Math.floor(Math.random() * colors.length)];
}