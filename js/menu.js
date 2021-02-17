// Hide and show navbar
let prevScrollpos = window.pageYOffset;
let minScrollpos = 175;
let navBar = document.querySelector(".logo-nav-bar-container");

window.onscroll = function() {

  let menuIsOpen = document.getElementById('logo-nav-bar').classList.contains('change');
  let currentScrollPos = window.pageYOffset;

  if(currentScrollPos > minScrollpos && !menuIsOpen){
    if(prevScrollpos > currentScrollPos) {
      navBar.style.top = '40px';
    } else {
      navBar.style.top = '-200px';
    }
  }
  prevScrollpos = currentScrollPos;
}

// Menu toggle
menu.addEventListener('click', () => {
  document.getElementById('logo-nav-bar').classList.toggle('change');
});