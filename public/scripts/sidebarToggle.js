const categoryList = document.querySelector('.sidebar_catogery');
const sideBarToggle = document.querySelector('.sidebar_toggle');

if (sideBarToggle && categoryList) {
  sideBarToggle.addEventListener('click', () => {
    categoryList.classList.toggle('active');
    sideBarToggle.classList.toggle('active');
  });
}

categoryList.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'A' || e.target.tagName === 'LI') {
    categoryList.classList.remove('active');
  }
});
