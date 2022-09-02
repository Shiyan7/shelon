import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller();
  const container = document.querySelector(".members");

  const animation = new TimelineMax()
  animation.staggerFromTo(".js-section", 0.1, {
      opacity: 0,
      visibility: 'hidden'
    }, {
      opacity: 1,
      visibility: 'visible'
    }, 1);

  new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 'onLeave',
    duration: "300%"
  })
  .setPin(container)
  .setTween(animation)
  .addIndicators()
  .addTo(controller);
})