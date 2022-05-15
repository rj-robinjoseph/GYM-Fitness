const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const body = document.querySelector("body");

const menuActive = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", menuActive);
