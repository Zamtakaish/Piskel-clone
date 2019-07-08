import addNewElement from '../../../rendering/addNewElement';

export default function fillColorLine(rowModifier) {
  const colorRow = document.getElementsByClassName('main__workspace__colors__color-selector_row');
  for (let i = 0; i < 3; i += 1) {
    let leadColor = 254;
    const rgbArray = [0, 0, 0];
    while (leadColor > 80) {
      for (let j = 0; j < 3; j += 1) {
        rgbArray.forEach((item, index) => {
          rgbArray[index] = leadColor / 3 * j;
        });
        rgbArray[i] = leadColor;
        const colorShift = (rowModifier === 1) ? leadColor / 6 * j : 0;
        if (rowModifier !== 0) {
          if (i < 2) {
            rgbArray[i + 1] = leadColor / 2 * rowModifier + colorShift;
          } else {
            rgbArray[0] = leadColor / 2 * rowModifier + colorShift;
          }
        }
        const newColor = addNewElement('li', 'main__workspace__colors__color-selector__item', colorRow[i * 3 + rowModifier]);
        newColor.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
      }
      leadColor -= 80;
    }
    rgbArray.forEach((item, index) => {
      rgbArray[index] = 210;
    });
    rgbArray[i] = 254;
    const colorShift = (rowModifier === 1) ? 96 : 0;
    if (rowModifier !== 0) {
      if (i < 2) {
        rgbArray[i + 1] = 127 * rowModifier + colorShift;
      } else {
        rgbArray[0] = 127 * rowModifier + colorShift;
      }
    }
    const newColor = addNewElement('li', 'main__workspace__colors__color-selector__item', colorRow[i * 3 + rowModifier]);
    newColor.style.backgroundColor = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
  }
}
