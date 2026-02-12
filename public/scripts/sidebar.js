const sidebarButtons = document.querySelectorAll("#sidebar_items .sidebar_btn");
const heroContent = document.querySelector(".hero_content h1");

let activeCategory = null;

sidebarButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    const slug = btn.dataset.slug;

    if (slug) {
      
      window.location.href = `/${category}/gadgets/${slug}`;
      return;
    }  if (activeCategory === category) {
      heroContent.textContent = `Welcome to ${category} page`;
      activeCategory = null;
    } else {
    
      heroContent.textContent = `${category.toUpperCase()} Gadgets`;
      activeCategory = category;
    }
  });
});
