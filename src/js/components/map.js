document.addEventListener("DOMContentLoaded", () => {
  const center = [55.77698061766332, 37.75570469131539];

  const init = () => {
    const map = new ymaps.Map('map', {
        center: center,
        zoom: 10
    });

    const placemark = new ymaps.Placemark(center, {
      iconCaption: 'ООО «Лесозавод «Судома»'
    }, {
      preset: 'islands#greenDotIconWithCaption'
    });

    map.behaviors.disable(["scrollZoom"]);

    map.geoObjects.add(placemark);
  }

  window.ymaps?.ready(init);
});