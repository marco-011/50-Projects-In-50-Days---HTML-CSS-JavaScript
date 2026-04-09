// Select the container where tags will be displayed
const tagsEl = document.getElementById("tags");

// Select the textarea where user types input
const textarea = document.getElementById("textarea");

// Automatically focus on textarea when page loads
textarea.focus();

// Listen for key press (when user types)
textarea.addEventListener("keyup", (e) => {
  // Send current input value to function
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // Convert input string into array of tags
  const tags = input
    .split(",") // split text by comma → ["apple", " mango"]
    .filter((tag) => tag.trim() !== "") // remove empty values
    .map((tag) => tag.trim()); // remove extra spaces

  // Clear previous tags before adding new ones
  tagsEl.innerHTML = "";

  // Loop through each tag
  tags.forEach((tag) => {
    // Create a span element for each tag
    const tagEl = document.createElement("span");

    // Add class "tag" for styling
    tagEl.classList.add("tag");

    // Add text inside the span
    tagEl.innerText = tag;

    // Add the tag element to the container
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}
// Get elements
// const tagsEl = document.getElementById("tags");
// const textarea = document.getElementById("textarea");

// // Focus input on load
// textarea.focus();

// // Handle typing
// textarea.addEventListener("keyup", (e) => createTags(e.target.value));

// // Create and display tags
// function createTags(input) {
//   // Convert input → clean array of tags
//   const tags = input
//     .split(",")              // split by comma
//     .map(tag => tag.trim()) // remove spaces
//     .filter(Boolean);       // remove empty values

//   // Render tags
//   tagsEl.innerHTML = tags
//     .map(tag => `<span class="tag">${tag}</span>`)
//     .join(""); // combine into one string
// }
