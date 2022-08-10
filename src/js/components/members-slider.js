import Swiper, { Thumbs, Autoplay  } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const membersSliderNav = new Swiper('.members-slider__nav', {
    modules: [Autoplay],
    autoplay: {
      delay: 3000
    },
    slidesPerView: 'auto',
    direction: 'vertical',
  })

  new Swiper('.members-slider__main', {
    modules: [Thumbs, Autoplay],
    spaceBetween: 15,
    slidesPerView: 1,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      577: {
        spaceBetween: 20
      }
    },
    thumbs: {
      swiper: membersSliderNav,
    }
  })
})