const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next');
const cricle = document.querySelectorAll('.cricle')



//--------------Simplified and version Cleaner----------------//
/*let currentActive = 1;

next.onclick = () => {
  currentActive = Math.min(currentActive + 1, cricle.length);
  update();
};

prev.onclick = () => {
  currentActive = Math.max(currentActive - 1, 1);
  update();
};*/
//--------------Simplified and version Cleaner end----------------//



let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > cricle.length) {
    currentActive = cricle.length;
    
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});


//--------------Simplified and version Cleaner----------------//
/*function update() {

  cricle.forEach((circle, index) =>
    circle.classList.toggle("active", index < currentActive)
  );

  const activeSteps = document.querySelectorAll(".active");

  const progressPercent =
    ((activeSteps.length - 1) / (cricle.length - 1)) * 100;

  progress.style.width = progressPercent + "%";

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === cricle.length;
}*/
//--------------Simplified and version Cleaner end----------------//
function update() {
  cricle.forEach((cricle, idx) => {
    if (idx < currentActive) {
      cricle.classList.add("active");
    } else {
      cricle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
progress.style.width = ((actives.length - 1) / (cricle.length - 1)) * 100 + '%';


if(currentActive === 1){
    prev.disabled = true
}
else  if( currentActive === cricle.length){
    next.disabled = true
}else{
    prev.disabled = false;
    next.disabled = false;
}
}



