/* Select loading text element */
const loadText = document.querySelector('.loading-text');

/* Select background element */
const bg = document.querySelector('.bg');

/* Initialize loading value */
let load = 0;

/* Run blurring function every 30ms */
let int = setInterval(blurring, 30);

/* Main function for animation */
function blurring() {
  load++; /* Increase loading value */

  console.log(load); /* Debug: check value in console */

  /* Stop interval when load reaches 100 */
  if (load > 99) {
    clearInterval(int);
  }

  /* Update loading text (0% → 100%) */
  loadText.textContent = `${load}%`;

  /* Fade out text (opacity 1 → 0) */
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  /* Reduce blur (30px → 0px) */
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/* Scale function → convert one range to another */
function scale(num, in_min, in_max, out_min, out_max) {
  return (
    (num - in_min) * (out_max - out_min) /
      (in_max - in_min) +
    out_min
  );
}