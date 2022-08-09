export const enableScroll = () => {
  if (document.body.hasAttribute("data-body-scroll-fix")) {

    let scrollPosition = document.body.getAttribute("data-body-scroll-fix");

    document.body.removeAttribute("data-body-scroll-fix");

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "";

    window.scroll(0, scrollPosition);
  }
}