export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
}

getHeaderHeight();

window.addEventListener('resize', getHeaderHeight);
window.addEventListener('scroll', getHeaderHeight);