import '../vendor/scrollHorizontally'
import fullpage from '../vendor/extensions'

document.addEventListener('DOMContentLoaded', () => {
  if(window.outerWidth >= 1024) {
    const header = document.querySelector('.header');

    new fullpage('#fullpage', {
      scrollingSpeed: 600,
      normalScrollElements: '.modal',
      scrollHorizontally: true,
      verticalCentered: false,

      onLeave: function(section, slide, position, direction){
        if(!slide.isFirst) {
          header?.classList.add('header--fixed');
          header?.classList.add('header--light');
        } else {
          header?.classList.remove('header--fixed');
          header?.classList.remove('header--light');
        }
      },
      afterSlideLoad: function() {
        const item = document.querySelector('.members-item.active');
        const id = item.dataset.slidePath
        document.querySelector('.members-slide.active')?.classList.remove('active')

        const target = document.querySelector(`.members-slide[data-slide-target='${id}']`)

        target.classList.add('active')
      }
    });
  }
});