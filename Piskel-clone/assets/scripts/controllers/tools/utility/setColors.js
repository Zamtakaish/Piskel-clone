import fillColorLine from './fillColorLine';
import addNewElement from '../../../rendering/addNewElement';

export default function setColors() {
  for (let i = 0; i < 3; i += 1) {
    fillColorLine(i);
  }
  const monochromeRow = document.getElementsByClassName('main__workspace__colors__color-selector_row')[9];
  for (let i = 0; i < 9; i += 1) {
    const newColor = addNewElement('li', 'main__workspace__colors__color-selector__item', monochromeRow);
    newColor.style.backgroundColor = `rgb(${25 * i}, ${25 * i}, ${25 * i})`;
  }
  const newColor = addNewElement('li', 'main__workspace__colors__color-selector__item', monochromeRow);
  newColor.style.backgroundColor = 'rgb(255, 255, 255)';
}
