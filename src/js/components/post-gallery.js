import Swiper, {Pagination, Navigation} from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.post-gallery', {
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    pagination: {
      el: '.post-gallery__pag',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      prevEl: '.post-gallery__btn--prev',
      nextEl: '.post-gallery__btn--next',
    }
  })
});