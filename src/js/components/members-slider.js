import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller();

  const container = document.querySelector(".members");

  const animation = new TimelineMax()
  .staggerFromTo(".js-section", 0, {
      autoAlpha: 0
    },
    {
      autoAlpha: 1
    }, 1);

  new ScrollMagic.Scene({
    triggerElement: container,
    triggerHook: 'onLeave',
    duration: "200%"
  })
  .setClassToggle('.members', 'members--active')
  .setPin(container)
  .setTween(animation)
  .addIndicators()
  .addTo(controller);

})