
function highlightCurrentPage(){
  const currentPage = location.pathname.split("/").pop();
  const linkList = document.querySelectorAll('.menu-link');
  
  linkList.forEach( link => {
    if(currentPage == link.getAttribute('href')){
      link.parentElement.classList.add('current-page');
    }
  })
}
function hideNavBar(){
  
}

let menu = document.getElementById('hamburguer-menu');

menu.addEventListener('click', () => {
  document.getElementById('logo-nav-bar').classList.toggle('change');
});
document.addEventListener('DOMContentLoaded', highlightCurrentPage);

// hide and show navbar
let prevScrollpos = window.pageYOffset;
let minScrollpos = 175;
let navBar =document.querySelector(".logo-nav-bar-container")

window.onscroll = function() {
  // console.log("Anterior: " + prevScrollpos);
  // console.log("Atual " + window.pageYOffset);
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
// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
// })


