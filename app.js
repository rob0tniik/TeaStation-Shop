console.log("Hello World")

// setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const links = document.querySelectorAll(".nav-link")

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
links.forEach(link => {
  link.addEventListener("click", () => {    
    navbar.classList.remove("showNav");
  })
})