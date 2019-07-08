import setColors from './utility/setColors';

export default function colorSelectorController() {
  const colorSelector = document.getElementsByClassName('main__workspace__colors__color-selector')[0];
  const activeColors = document.getElementsByClassName('main__workspace__colors__active-colors')[0];

  setColors();

  colorSelector.addEventListener('mouseleave', () => {
    const changingColor = activeColors.getElementsByClassName('active')[0];
    changingColor.className = changingColor.className.replace(' active', '');
    colorSelector.style.visibility = 'hidden';
  });
  activeColors.addEventListener('click', (event) => {
    const eventElement = event.target;
    if (eventElement.classList.contains('main__workspace__colors__active-colors__item')) {
      colorSelector.style.visibility = 'visible';
      eventElement.className += ' active';
    }
  });

  colorSelector.addEventListener('click', (event) => {
    const changingColor = activeColors.getElementsByClassName('active')[0];
    changingColor.style.backgroundColor = event.target.style.backgroundColor;
    localStorage.setItem('curr-color', document.getElementById('curr-color').style.backgroundColor);
    localStorage.setItem('prev-color', document.getElementById('prev-color').style.backgroundColor);
  });
}
