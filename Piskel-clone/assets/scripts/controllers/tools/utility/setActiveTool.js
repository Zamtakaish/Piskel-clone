import setCursor from './setCursor';

export default function resetActiveClass(index) {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  const current = buttonContainer.getElementsByClassName('active');
  if (current.length > 0) {
    current[0].className = current[0].className.replace(' active', '');
  }
  buttons[index].className += ' active';
  setCursor(index);
}
