import swapColors from './utility/swapColors';

export default function colorPickerController() {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  const currentColor = document.getElementById('curr-color');
  const prevColor = document.getElementById('prev-color');
  if (localStorage.getItem('curr-color') !== null) {
    currentColor.style.backgroundColor = localStorage.getItem('curr-color');
  } else {
    currentColor.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
  }
  if (localStorage.getItem('prev-color') !== null) {
    prevColor.style.backgroundColor = localStorage.getItem('prev-color');
  }

  function chooseColorHandler(event) {
    if ((buttonContainer.getElementsByClassName('active')[0] === buttons[1])) {
      const canvasContext = canvas.getContext('2d');
      const eventPosition = (event.offsetY * canvas.width * 4) + (event.offsetX * 4);
      const canvasData = canvasContext.getImageData(0, 0, canvas.width, canvas.height).data;
      const eventColorArray = [canvasData[eventPosition], canvasData[eventPosition], canvasData[eventPosition], canvasData[eventPosition]];
      const eventColor = `rgb(${eventColorArray[0]}, ${eventColorArray[1]}, ${eventColorArray[2]})`;
      if (currentColor.style.backgroundColor !== eventColor) {
        swapColors();
        currentColor.style.backgroundColor = eventColor;
        localStorage.setItem('curr-color', currentColor.style.backgroundColor);
        localStorage.setItem('prev-color', prevColor.style.backgroundColor);
      }
    }
  }

  return canvas.addEventListener('mouseup', chooseColorHandler);
}
