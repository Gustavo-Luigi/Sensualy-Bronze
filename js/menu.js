let prevScrollPos = window.pageYOffset;
const minScrollpos = 175;
const navBar = document.querySelector(".logo-nav-bar-container");

function hideAndShowMenu() {
  let menuIsOpen = document
    .getElementById("logo-nav-bar")
    .classList.contains("change");
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > minScrollpos && !menuIsOpen) {
    if (prevScrollPos > currentScrollPos) {
      showNav();
    } else {
      hideNav();
    }
  }
  prevScrollPos = currentScrollPos;
}

function showNav() {
  navBar.classList.remove("hide-nav");
}

function hideNav() {
  navBar.classList.add('hide-nav');
}

window.addEventListener("scroll", hideAndShowMenu);

const menu = document.querySelector("#hamburguer-menu");

menu.addEventListener("click", () => {
  document.getElementById("logo-nav-bar").classList.toggle("change");
});
