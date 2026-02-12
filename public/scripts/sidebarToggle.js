const categoryList = document.querySelector('.sidebar_gadget');
const sideBarToggle = document.querySelector('.sidebar_toggle');

if (sideBarToggle && categoryList) {
  sideBarToggle.addEventListener('click', () => {
    categoryList.classList.toggle('active');
    sideBarToggle.classList.toggle('active');
  });
}

categoryList.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'A' || e.target.tagName === 'DIV') {
    categoryList.classList.remove('active');
  }
});
