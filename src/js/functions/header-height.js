export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('.header').offsetHeight;
  const menuHeight = document?.querySelector('.menu').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
  document.querySelector(':root').style.setProperty('--menu-height', `${menuHeight}px`);
}

getHeaderHeight();

window.addEventListener('resize', getHeaderHeight);
window.addEventListener('scroll', getHeaderHeight);