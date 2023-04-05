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
const bars = document.getElementById("bars")


// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.toggle("showNav");
  //Icon swap
  if(bars.classList.contains("fa-bars")){
    bars.classList.remove("fa-bars")
    bars.classList.add("fa-times")
  }else {
    bars.classList.remove("fa-times")
    bars.classList.add("fa-bars")
  }
});

// close nav
// navClose.addEventListener("click", () => {
//   navbar.classList.remove("showNav");
// });
links.forEach(link => {
  link.addEventListener("click", () => {    
    navbar.classList.remove("showNav");
    // Icon swap
    bars.classList.remove("fa-times")
    bars.classList.add("fa-bars")    
  })
})
