
function highlightCurrentPage(){
  const currentPage = location.pathname.split("/").pop();
  const linkList = document.querySelectorAll('.menu-link');
  
  linkList.forEach( link => {
    if(currentPage == link.getAttribute('href')){
      link.parentElement.classList.add('current-page');
    }
  })
}

let menu = document.getElementById('hamburguer-menu');

menu.addEventListener('click', () => {
  document.getElementById('logo-nav-bar').classList.toggle('change');
});
document.addEventListener('DOMContentLoaded', highlightCurrentPage);

// window.addEventListener('resize', () => {
//   console.log(window.innerWidth);
// })


