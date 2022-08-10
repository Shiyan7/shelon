document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  function fixedHeader () {
    let scrollDistance = window.scrollY;

    if (scrollDistance > lastScrollTop) {
      header.classList.add('header--fixed');
    }

    if (scrollDistance === 0) {
      header.classList.remove('header--fixed');
    }

    lastScrollTop = scrollDistance;
  }

  fixedHeader()

  window.addEventListener('scroll', () => {
    fixedHeader()
  });
});