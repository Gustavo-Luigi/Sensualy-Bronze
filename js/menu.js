class Menu {

  constructor(navBar, navBarContainer, hamburguer, changeClass, menuLink) {
    this.navBar = document.querySelector(navBar);
    this.navBarContainer = document.querySelector(navBarContainer);
    this.hamburguer = document.querySelector(hamburguer)
    this.menuLink = document.querySelectorAll(menuLink);
    this.changeClass = changeClass;
    this.prevScrollPos = window.pageYOffset;
  }
  highlightCurrentPage(highlightClassName) {

    const currentPage = location.pathname.split("/").pop();
    const linkList = this.menuLink;
    
    linkList.forEach( link => {
      if(currentPage == link.getAttribute('href')){
        link.parentElement.classList.add(highlightClassName);
      }
    })
  }

  toggleMenu() {
    this.navBar.classList.toggle(this.changeClass);
  }

  toggleNavOnScroll(minScrollPos, showPosition, hidePosition) {

    let menuIsOpen = this.navBar.classList.contains(this.changeClass);
    let currentScrollPos = window.pageYOffset;

    if(currentScrollPos > minScrollPos && !menuIsOpen){
      if(this.prevScrollPos > currentScrollPos) {
        this.navBarContainer.style.top = `${showPosition}px`;
      } else {
        this.navBarContainer.style.top = `${hidePosition}px`;
      }
    }
    this.prevScrollPos = currentScrollPos;
  }
}


let menu = new Menu('#logo-nav-bar', '.logo-nav-bar-container', '#hamburguer-menu', 'change', '.menu-link');

menu.highlightCurrentPage('current-page');

// let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  menu.toggleNavOnScroll(175, 40, -200);
}

document.getElementById('hamburguer-menu').addEventListener('click', () => {
  menu.toggleMenu();
});








// hide and show navbar
// let prevScrollpos = window.pageYOffset;
// let minScrollpos = 175;
// let navBar =document.querySelector(".logo-nav-bar-container")

// window.onscroll = function() {
//   // console.log("Anterior: " + prevScrollpos);
//   // console.log("Atual " + window.pageYOffset);
//   let menuIsOpen = document.getElementById('logo-nav-bar').classList.contains('change');
//   let currentScrollPos = window.pageYOffset;

//   if(currentScrollPos > minScrollpos && !menuIsOpen){
//     if(prevScrollpos > currentScrollPos) {
//       navBar.style.top = '40px';
//     } else {
//       navBar.style.top = '-200px';
//     }
//   }
//   prevScrollpos = currentScrollPos;
// }

// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
// })





// **********************************

// function highlightCurrentPage(){
//   const currentPage = location.pathname.split("/").pop();
//   const linkList = document.querySelectorAll('.menu-link');
  
//   linkList.forEach( link => {
//     if(currentPage == link.getAttribute('href')){
//       link.parentElement.classList.add('current-page');
//     }
//   })
// }

// menu.addEventListener('click', () => {
//   document.getElementById('logo-nav-bar').classList.toggle('change');
// });