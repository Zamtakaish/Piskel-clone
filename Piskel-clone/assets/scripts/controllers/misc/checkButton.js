export default function checkButton(key) {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  return (buttonContainer.getElementsByClassName('active')[0] === buttons[key]);
}
