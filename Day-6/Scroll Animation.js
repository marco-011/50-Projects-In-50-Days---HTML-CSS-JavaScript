const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry); // 🔍 debug

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    root: null,
    
    threshold: 0.9
});


boxes.forEach(box => observer.observe(box));
//Basic Syntax//
//entries.forEach(entry => {
    // code here
//});

//Full IntersectionObserver Syntax

//const observer = new IntersectionObserver((entries) => {
    //entries.forEach(entry => {
        // use entry here
    //});
//});

//🔸 Common Practical Syntax
//entries.forEach(entry => {
   // if (entry.isIntersecting) {
   //     entry.target.classList.add('show');
   // } else {
        //entry.target.classList.remove('show');
   // }
//});
//🔸 Short (Modern) Syntax
//entries.forEach(entry => 
   // entry.target.classList.toggle('show', entry.isIntersecting)
//);

//Main Options
/*{
  root: null,
  rootMargin: "0px",
  threshold: 0.2
}*/

/*
const sr = ScrollReveal({
  origin: 'bottom',   // default direction
  distance: '60px',   // default movement
  duration: 1500,     // animation time
  delay: 300          // base delay
})





// Title → from top
sr.reveal('.home__title', { origin: 'top' })

// Description → after title
sr.reveal('.home__description', { origin: 'top', delay: 600 })

// Button → zoom effect
sr.reveal('.home__data_button', {
  delay: 900,
  distance: 0,
  scale: 0
})

// Images → one by one
sr.reveal('.home__images img', {
  delay: 1200,
  interval: 200,
  scale: 0
})

// Text → last + bigger movement
sr.reveal('.home__text', {
  delay: 1500,
  distance: '120px'
})*/