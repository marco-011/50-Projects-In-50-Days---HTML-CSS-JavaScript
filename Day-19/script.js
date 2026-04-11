// 👉 Select clock elements from DOM
const hourEl = document.querySelector(".hour");     // Hour hand
const minuteEl = document.querySelector(".minute"); // Minute hand
const secondEl = document.querySelector(".second"); // Second hand
const timeEl = document.querySelector(".time");     // Digital time display
const dateEl = document.querySelector(".date");     // Date display
const toggle = document.querySelector(".toggle");   // Dark mode button


// 👉 Days and Months arrays (for display)
const days = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

const months = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];


// 👉 Utility function to convert one range to another
// Example: 30 seconds → 180 degrees
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) /
         (in_max - in_min) + out_min;
};


// 👉 Dark / Light Mode Toggle
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html"); // select root element

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");           // remove dark theme
    e.target.innerHTML = "Dark mode";        // button text change
  } else {
    html.classList.add("dark");              // add dark theme
    e.target.innerHTML = "Light mode";       // button text change
  }
});


// 👉 Main function to update clock every second
function setTime() {
  const time = new Date(); // get current time

  // 👉 Extract date values
  const month = time.getMonth(); // 0–11
  const day = time.getDay();     // 0–6 (Sunday–Saturday)
  const date = time.getDate();   // 1–31

  // 👉 Extract time values
  const hours = time.getHours(); // 0–23
  const hoursForClock = hours % 12 || 12; // convert to 12-hour format
  const minutes = time.getMinutes();      // 0–59
  const seconds = time.getSeconds();      // 0–59

  // 👉 AM / PM
  const ampm = hours >= 12 ? "PM" : "AM";


  // 👉 Rotate clock hands using CSS transform
  hourEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;

  minuteEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

  secondEl.style.transform =
    `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;


  // 👉 Digital time display
  timeEl.innerHTML =
    `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;


  // 👉 Date display (example: Monday, Apr 2)
  dateEl.innerHTML =
    `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}


// 👉 Run function once immediately
setTime();

// 👉 Update every 1 second (1000 ms)
setInterval(setTime, 1000);
