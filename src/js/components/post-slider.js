import Swiper from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.post-slider', {
    slidesPerView: 1,
    speed: 500,
  })
});