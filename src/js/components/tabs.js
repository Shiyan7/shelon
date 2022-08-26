import Swiper from 'swiper'

document.addEventListener("DOMContentLoaded", () => {
  const sliderTabs = document.querySelector(".swiper-tabs");

  const swiperTabs = new Swiper(sliderTabs, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    navigation: false,
  });

  function moveSlider(direction) {
    let countSlides = 10;

    if (window.innerWidth <= 575) {
      countSlides = 7;
    }

    const currentSlide = sliderTabs.querySelector('.tabs__nav-btn--active').closest('.swiper-slide');
    const sliderWidth = sliderTabs.clientWidth;

    if (currentSlide !== null) {
      if (direction == 'next') {
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide !== null) {

          currentSlide.querySelector('.tabs__nav-btn--active').classList.remove('tabs__nav-btn--active');

          nextSlide.querySelector('.tabs__nav-btn').classList.add('tabs__nav-btn--active');

          let tabsPath = nextSlide.querySelector('.tabs__nav-btn').dataset.tabsPath;
          let tabsContent = nextSlide.closest(".tabs").querySelectorAll(".tabs__panel");

          switchContent(tabsPath, nextSlide.querySelector('.tabs__nav-btn'), tabsContent);

          if ((nextSlide.offsetLeft + swiperTabs.getTranslate() + 5) >= Math.floor(sliderWidth / countSlides * (countSlides - 1))) {
            swiperTabs.slideTo(swiperTabs.activeIndex + countSlides - 1);
          }
        }
      } else if (direction == 'prev') {
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide !== null) {
          currentSlide.querySelector('.tabs__nav-btn--active').classList.remove('tabs__nav-btn--active');

          prevSlide.querySelector('.tabs__nav-btn').classList.add('tabs__nav-btn--active');

          let tabsPath = prevSlide.querySelector('.tabs__nav-btn').dataset.tabsPath;
          let tabsContent = prevSlide.closest(".tabs").querySelectorAll(".tabs__panel");

          switchContent(tabsPath, prevSlide.querySelector('.tabs__nav-btn'), tabsContent);

          if ((prevSlide.offsetLeft + swiperTabs.getTranslate() - 5) <= sliderWidth / countSlides * (countSlides - (countSlides))) {
            swiperTabs.slideTo(swiperTabs.activeIndex - countSlides + 1);
          }
        }
      } else {

        if ((currentSlide.offsetLeft + swiperTabs.getTranslate()) >= Math.floor(sliderWidth / countSlides * (countSlides - 2))) {
          swiperTabs.slideNext();
          swiperTabs.slideNext();
        }

        if ((currentSlide.offsetLeft + swiperTabs.getTranslate()) <= sliderWidth / countSlides * (countSlides - (countSlides - 2))) {
          swiperTabs.slidePrev();
          swiperTabs.slidePrev();
        }
      }
    }
  }

  const switchContent = (path, element, tabsContent) => {
    for (let i = 0; i < tabsContent.length; i++) {
      let el = tabsContent[i];
      el.classList.remove('tabs__panel--active')
    }
    element.closest(".tabs")?.querySelector(`[data-tabs-target="${path}"]`)?.classList.add('tabs__panel--active');
  };

  const tabsBtn = document.querySelectorAll(".tabs__nav-btn");

  tabsBtn.forEach(el => {
    el.addEventListener("click", () => {

      const tabsPath = el.dataset.tabsPath;

      el.closest(".tabs").querySelector('.tabs__nav-btn--active').classList.remove('tabs__nav-btn--active')

      el.closest(".tabs").querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__nav-btn--active');

      let tabsContent = el.closest(".tabs").querySelectorAll(".tabs__panel");

      switchContent(tabsPath, el, tabsContent);

      if (sliderTabs !== null) {
        moveSlider();
      }
    });
  });
});