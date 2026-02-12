const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav_menu");
const closeIcon = document.querySelector(".close-icon");

hamburger.addEventListener('click',()=>{

  nav_menu.classList.add("show");
})


const closeSidebar = () => {
  closeIcon.addEventListener("click", () => {
    nav_menu.classList.remove("show");
  })
}
closeSidebar();