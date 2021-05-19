const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.style.top = 0;
  } else if (window.scrollY == 0) {
    navbar.style.top = 30;
  }
});
