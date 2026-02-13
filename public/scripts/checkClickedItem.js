document.addEventListener('DOMContentLoaded', () => {
  const gadgetList = document.querySelectorAll('.gadget_link');

  gadgetList.forEach((linkItem) => {
    linkItem.addEventListener('click', (e) => {
      if (linkItem.classList.contains('clicked')) {
        e.preventDefault();
        linkItem.classList.remove('clicked');

        const clickedURL = linkItem.getAttribute('href');
        console.log('Clicked URL:', clickedURL);

        const URLItem = clickedURL
          .split('/')
          .filter((urlsegment) => urlsegment);
        console.log('URL Parts:', URLItem);

        if (URLItem.length === 2) {
          window.location.href = `/${URLItem[0]}`;
        } else if (URLItem.length === 1) {
          window.location.href = '/';
        }
      } else {
        gadgetList.forEach((l) => l.classList.remove('clicked'));
        linkItem.classList.add('clicked');
      }
    });
  });

  const currentPath = window.location.pathname;
  gadgetList.forEach((link) => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('clicked');
    }
  });
});
