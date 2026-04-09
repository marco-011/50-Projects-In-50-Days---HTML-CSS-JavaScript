// 👉 Select the navigation element from the DOM
const nav = document.querySelector(".nav");

// 👉 Listen for scroll event on the window
window.addEventListener("scroll", fixNav);

// 👉 Function to handle navbar behavior on scroll
function fixNav() {
  // 👉 Check if user scrolled more than nav height + 150px
  if (window.scrollY > nav.offsetHeight + 150) {
    // 👉 Add 'active' class when condition is true
    // This usually makes navbar fixed / changes style
    nav.classList.add("active");
  } else {
    // 👉 Remove 'active' class when scroll is less
    // Navbar returns to normal state
    nav.classList.remove("active");
  }
}
