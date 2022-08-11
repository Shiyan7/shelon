import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const header = document?.querySelector('.header');
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
    overlay.classList.toggle('overlay--active')
    header.classList.toggle('header--active')

    if (menu.classList.contains('menu--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Открыть меню');
    overlay.classList.remove('overlay--active')
    header.classList.remove('header--active')
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    enableScroll();
  });
})();
