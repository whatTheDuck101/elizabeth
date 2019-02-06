var navbar = document.getElementById("test");
var project = document.getElementById("projects-backgropund");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // document.project.style.paddingTop = nav.offsetHeight + "px";
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", myFunction);
myFunction();
