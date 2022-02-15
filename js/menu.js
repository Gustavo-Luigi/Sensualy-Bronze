let prevScrollpos = window.pageYOffset;
const minScrollpos = 175;
const navBar = document.querySelector(".logo-nav-bar-container");


function hideAndShowMenu() {
  let menuIsOpen = document
    .getElementById("logo-nav-bar")
    .classList.contains("change");
  let currentScrollPos = window.pageYOffset;

  if (currentScrollPos > minScrollpos && !menuIsOpen) {
    if (prevScrollpos > currentScrollPos) {
      showNav();
    } else {
      hideNav();
    }
  }
  prevScrollpos = currentScrollPos;
}

function showNav() {
    navBar.style.top = '40px';
}

function hideNav() {
  navBar.style.top = '-200px';
}

window.addEventListener("scroll", hideAndShowMenu);

const menu = document.querySelector("#hamburguer-menu");

menu.addEventListener("click", () => {
  document.getElementById("logo-nav-bar").classList.toggle("change");
});
