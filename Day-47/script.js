const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const progressBar = document.querySelector(".progress-bar");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://images.pexels.com/photos/29181863/pexels-photo-29181863/free-photo-of-stylish-woman-smiling-by-scenic-lake-and-mountains.jpeg",
    text: "Commodi pariatur provident alias quaerat ratione itaque, necessitatibus hic voluptatibus velit reprehenderit."
  },
  {
    name: "Miya",
    position: "Teacher",
    photo: "https://images.pexels.com/photos/13288598/pexels-photo-13288598.jpeg",
    text: "Tempora voluptatibus expedita necessitatibus voluptates! Veritatis harum accusantium laborum ex excepturi."
  },
  {
    name: "Myles",
    position: "UI Developer",
    photo: "https://images.pexels.com/photos/16062375/pexels-photo-16062375/free-photo-of-man-wearing-a-blue-shirt.jpeg",
    text: "Minus id nisi fuga maxime placeat distinctio vero alias corrupti quae iusto suscipit vel."
  },
  {
    name: "Surya",
    position: "Architecture",
    photo: "https://images.pexels.com/photos/8044085/pexels-photo-8044085.jpeg",
    text: "Harum accusantium laborum ex excepturi minus id nisi fuga maxime placeat distinctio vero alias."
  }
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.textContent = text;
  userImage.src = photo;
  username.textContent = name;
  role.textContent = position;

  // 🔁 Restart progress animation
  progressBar.style.animation = "none";
  progressBar.offsetHeight; // trigger reflow
  progressBar.style.animation = "grow 10s linear infinite";

  idx++;
  if (idx >= testimonials.length) {
    idx = 0;
  }
}

// initial load
updateTestimonial();

// auto switch
setInterval(updateTestimonial, 10000);