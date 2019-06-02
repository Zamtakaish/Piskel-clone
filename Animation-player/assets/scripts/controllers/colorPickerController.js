export default function colorPickerController() {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  document.getElementById('curr-color').style.backgroundColor = getComputedStyle(document.getElementById('curr-color')).backgroundColor;

  function chooseColorHandler(event) {
    const menuButton = document.elementFromPoint(event.clientX, event.clientY).closest('.main__workspace__tools__items__tool');

    if ((buttonContainer.getElementsByClassName('active')[0] === buttons[1]) && (event.which === 1) && (menuButton === null)) {
      const buffer = getComputedStyle(document.getElementById('curr-color')).backgroundColor;
      document.getElementById('curr-color').style.backgroundColor = getComputedStyle(event.target).backgroundColor;
      document.getElementById('prev-color').style.backgroundColor = buffer;
    }
  }

  return document.body.addEventListener('mouseup', chooseColorHandler);
}
