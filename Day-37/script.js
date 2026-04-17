const content = document.querySelectorAll(".content");
const links = document.querySelectorAll("nav ul li");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    hideAllcontent();
    hideAllitems();
    link.classList.add("active");
    content[index].classList.add("show");
  });
});

function hideAllcontent() {
  content.forEach((item) => {
    item.classList.remove("show");
  });
}
function hideAllitems() {
  links.forEach((item) => {
    item.classList.remove("active");
  });
}
