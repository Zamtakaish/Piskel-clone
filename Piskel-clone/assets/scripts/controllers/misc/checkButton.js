export default function checkButton(key) {
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  return ((canvas.classList.contains('active')) && (buttonContainer.getElementsByClassName('active')[0] === buttons[key]));
}
