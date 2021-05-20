/* nav bar expand */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  let posY = window.scrollY;
  // console.log(posY);
  if (posY < 30) {
    navbar.style.top = "30px";
    navbar.style.width = "90%";
  } else {
    navbar.style.top = "0px";
    navbar.style.width = "100%";
  }
});

/* show menu */
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("showMenu");
});
