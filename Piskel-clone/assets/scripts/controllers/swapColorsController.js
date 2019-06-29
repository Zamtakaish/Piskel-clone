import swapColors from './misc/swapColors';

export default function swapColorsController() {
  const swapButton = document.getElementsByClassName('main__workspace__colors__swap-button')[0];

  return swapButton.addEventListener('mouseup', swapColors);
}
