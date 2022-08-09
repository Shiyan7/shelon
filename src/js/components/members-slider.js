import Swiper, { Thumbs, Autoplay  } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
  const membersSliderNav = new Swiper('.members-slider__nav', {
    modules: [Autoplay],
    autoplay: {
      delay: 3000
    },
    slidesPerView: 'auto',
    direction: 'vertical',
    spaceBetween: 40,
  })

  new Swiper('.members-slider__main', {
    modules: [Thumbs, Autoplay],
    autoplay: {
      delay: 3000
    },
    spaceBetween: 20,
    slidesPerView: 1,
    thumbs: {
      swiper: membersSliderNav,
    }
  })
})