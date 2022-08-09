export const disableScroll = () => {

  setTimeout(function () {

    if (!document.body.hasAttribute("data-body-scroll-fix")) {

      let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      document.body.setAttribute("data-body-scroll-fix", scrollPosition);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollPosition + "px";
      document.body.style.left = "0";
      document.body.style.width = "100%";

    }

  }, 15);
}