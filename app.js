const getByClass = (element) => document.getElementsByClassName(element);
const getById = (element) => document.getElementById(element);

const hamburgerMenu = document.getElementsByClassName("header_menu")[0];
const closeMenu = getById("header_close");
const menuFixed = getById("header_menu--fixed");

hamburgerMenu.addEventListener("click", () => {
  menuFixed.style.setProperty("display", "flex");
});

closeMenu.addEventListener("click", (event) => {
  event.stopPropagation();
  menuFixed.classList.add("animate__bounceOutLeft");
  setTimeout(() => {
    menuFixed.style.setProperty("display", "none");
    menuFixed.classList.remove("animate__bounceOutLeft");
  }, 800);
});
