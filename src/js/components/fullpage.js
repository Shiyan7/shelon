import fullpage from '../vendor/fullpage'

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  new fullpage('#fullpage', {
    scrollBar: true,
    scrollOverflow: true,
    scrollingSpeed: 600,
    normalScrollElements: '.modal',
    onLeave: function(section, slide, position, direction){
      if(!slide.isFirst) {
        header?.classList.add('header--fixed');
        header?.classList.add('header--light');
      } else {
        header?.classList.remove('header--fixed');
        header?.classList.remove('header--light');
      }
    }
  });
});