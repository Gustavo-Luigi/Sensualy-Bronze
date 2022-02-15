let prevScrollpos = window.pageYOffset;
const minScrollpos = 175;
const navBar = document.querySelector(".logo-nav-bar-container");
const desktopNavHeight = "135px";
const mobileNavHeight = "90px";

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
  if (window.innerWidth < 760) {
    navBar.style.height = mobileNavHeight;
  } else {
    navBar.style.height = desktopNavHeight;
  }
}

function hideNav() {
  navBar.style.height = 0;
}

window.addEventListener("scroll", hideAndShowMenu);

const menu = document.querySelector("#hamburguer-menu");

menu.addEventListener("click", () => {
  document.getElementById("logo-nav-bar").classList.toggle("change");
});
