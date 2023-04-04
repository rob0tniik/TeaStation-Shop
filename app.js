console.log("Hello World")

// setup date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const index = document.getElementById("borrar-index");
const skills = document.getElementById("borrar-skills")
const about = document.getElementById("borrar-about")
const products = document.getElementById("borrar-products")
const services = document.getElementById("borrar-services")
const contact = document.getElementById("borrar-contact")

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
index.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
skills.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

about.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
products.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
services.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
contact.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});