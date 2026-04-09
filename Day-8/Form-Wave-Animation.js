// Select all <label> elements inside .form-control
const labels = document.querySelectorAll('.form-control label')

// Loop through each label
labels.forEach(label => {

  // Take the text inside label (like "Email")
  // Split it into letters → ["E","m","a","i","l"]
  // Convert each letter into <span>letter</span>
  // Join everything back into one string
  label.innerHTML = label.innerText
    .split('') // split text into individual letters
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // wrap each letter in <span>
    .join('') // combine all spans into one string

})