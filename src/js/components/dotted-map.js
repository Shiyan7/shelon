import DottedMap from 'dotted-map';

document.addEventListener('DOMContentLoaded', () => {
  const mapImage = document.querySelector('.map__image');

  if(mapImage) {
    const map = new DottedMap({
      height: 60,
      grid: 'vertical',
    });

    map.addPin({
      lat: 47.639234590545584,
      lng: 14.151821151658586,
      svgOptions: {
        color: 'var(--color-main)',
        radius: 0.5,
      }
    });

    map.addPin({
      lat: 42.21259470315204,
      lng: 43.44596784750352,
      svgOptions: {
        color: 'var(--color-main)',
        radius: 0.5,
      }
    })

    map.addPin({
      lat: 34.14621825447495,
      lng: 9.681533863396629,
      svgOptions: {
        color: 'var(--color-main)',
        radius: 0.6,
      }
    })

    map.addPin({
      lat: 50.107917890872805,
      lng: 8.699040295882071,
      svgOptions: {
        color: 'var(--color-main)',
        radius: 0.7,
      }
    })

    map.addPin({
      lat: 60.954347267875306,
      lng: 76.58612220487889,
      svgOptions: {
        color: 'var(--color-main)',
        radius: 0.5,
      }
    })

    const svgMap = map.getSVG({
      radius: 0.27,
      color: '#dadada',
      shape: 'circle',
    });

    mapImage.innerHTML = svgMap
  }
})