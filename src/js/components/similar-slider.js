import Swiper, {Navigation, Grid} from 'swiper'

document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.similar-slider', {
    modules: [Navigation, Grid],
    grid: {
      fill: 'row',
      rows: 2
    },
    slidesPerView: 1,
    navigation: {
      prevEl: '.similar-slider__btn--prev',
      nextEl: '.similar-slider__btn--next',
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        grid: {
          rows: 1,
        }
      }
    },
  })
})