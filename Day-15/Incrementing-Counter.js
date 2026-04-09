// 1️⃣ Select all elements with class 'counter'
const counters = document.querySelectorAll(".counter");

// 2️⃣ Loop through each counter element
counters.forEach((counter) => {
  // 3️⃣ Set initial displayed value to 0
  counter.innerText = "0";

  // 4️⃣ Create function to update the counter
  const updateCounter = () => {
    // 5️⃣ Get target value from HTML (data-target) and convert to number
    const target = +counter.getAttribute("data-target");

    // 6️⃣ Get current value shown in UI and convert to number
    const c = +counter.innerText;

    // 7️⃣ Calculate increment (step size for animation)
    const increment = target / 200;

    // 8️⃣ Check if current value is less than target
    if (c < target) {
      // 9️⃣ Increase value and round it to avoid decimals
      counter.innerText = `${Math.ceil(c + increment)}`;

      // 🔟 Call this function again after 1ms (creates animation loop)
      setTimeout(updateCounter, 1);
    } else {
      // 11️⃣ If target reached, set exact value (stop animation)
      counter.innerText = target;
    }
  };

  // 12️⃣ Start the counter animation
  updateCounter();
});

// // 1️⃣ Select all elements with class 'counter'
// const counters = document.querySelectorAll('.counter');

// // 2️⃣ Loop through each counter element
// counters.forEach(counter => {

//   // 3️⃣ Set initial value to 0
//   counter.textContent = '0';

//   // 4️⃣ Get target value from data-target attribute
//   const target = Number(counter.dataset.target);

//   // 5️⃣ Define function to update counter
//   const updateCounter = () => {

//     // 6️⃣ Get current value displayed
//     const current = Number(counter.textContent);

//     // 7️⃣ Calculate increment (step size)
//     const increment = target / 200;

//     // 8️⃣ If current value is less than target
//     if (current < target) {

//       // 9️⃣ Increase value and round it
//       counter.textContent = Math.ceil(current + increment);

//       // 🔟 Call function again after small delay (animation loop)
//       setTimeout(updateCounter, 10);

//     } else {

//       // 11️⃣ If reached target, set exact value
//       counter.textContent = target;
//     }
//   };

//   // 12️⃣ Start the counter animation
//   updateCounter();
// });
