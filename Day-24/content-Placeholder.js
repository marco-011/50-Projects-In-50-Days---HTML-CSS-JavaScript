// Select elements from HTML using their IDs
const header = document.getElementById("header");        // Image container
const title = document.getElementById("title");          // Title text
const excerpt = document.getElementById("excerpt");      // Description text
const profile_img = document.getElementById("profile_img"); // Profile image container
const name = document.getElementById("name");            // Author name
const date = document.getElementById("date");            // Date text

// Simulate API loading using setTimeout (2.5 seconds delay)
setTimeout(() => {

  // 👉 Insert real image into header
  header.innerHTML = `
    <img src="https://4kwallpapers.com/images/walls/thumbs_3t/24851.jpg" alt="image">
  `;

  // 👉 Add real title text
  title.innerText = "Fire Force";

  // 👉 Add real description text
  excerpt.innerText =
    "Fire Force is a Japanese anime series about firefighters with supernatural abilities fighting fire demons.";

  // 👉 Insert profile image
  profile_img.innerHTML = `
    <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="user">
  `;

  // 👉 Add author name
  name.innerText = "Ravi Kumar";

  // 👉 Add date
  date.innerText = "Oct 08, 2020";

  // 👉 Remove skeleton loading background (shimmer effect)
  document.querySelectorAll(".animated-bg").forEach((el) => {
    el.classList.remove("animated-bg");
  });

  // 👉 Remove skeleton text styles
  document.querySelectorAll(".animated-bg-text").forEach((el) => {
    el.classList.remove("animated-bg-text");
  });

}, 2500); // ⏱ Runs after 2.5 seconds