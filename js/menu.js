class Menu {
  static toggleMenu(){
    document.getElementById('logo-nav-bar').classList.toggle('change');
  }
  static getCurrentPage(){
    const currentPage = window.location.pathname.split("/").pop();
    const linkList = document.querySelectorAll('.menu-link');
    
    linkList.forEach((link) => {
      if(currentPage == link.getAttribute('href')){
        link.parentElement.classList.add('current-page');
      }
    })
  }
}

let menu = document.getElementById('hamburguer-menu');

menu.addEventListener('click', Menu.toggleMenu);
document.addEventListener('DOMContentLoaded', Menu.getCurrentPage);

// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
// })


