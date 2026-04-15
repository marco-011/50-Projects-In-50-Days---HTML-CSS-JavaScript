const imgs = document.getElementById("imgs"); // ✅ container
const imgElements = document.querySelectorAll("#imgs img");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > imgElements.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgElements.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`; // ✅ correct
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++; // ✅ next
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--; // ✅ prev
  changeImage();
  resetInterval();
});