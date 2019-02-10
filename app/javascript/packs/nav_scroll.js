var navbar = document.getElementById("nav-scroll");
var project = document.getElementById("projects-backgropund");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", myFunction);
