import checkButton from './utility/checkButton';

export default function ditheringController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const scaleSize = document.getElementsByClassName('main__workspace__canvas')[0].width / frameScale;
  function isCoordsEqual(coordX, coordY) {
    return coordX % 2 === coordY % 2;
  }

  canvasWrapper.addEventListener('mousedown', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if (checkButton(8)) {
      const coordX = Math.floor(event.offsetX / scaleSize);
      const coordY = Math.floor(event.offsetY / scaleSize);
      if (isCoordsEqual(coordX, coordY)) {
        canvasContext.fillRect(coordX, coordY, 1, 1);
      }
    }
  });
  canvasWrapper.addEventListener('mousemove', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if ((checkButton(8)) && (canvas.classList.contains('active'))) {
      const coordX = Math.floor(event.offsetX / scaleSize);
      const coordY = Math.floor(event.offsetY / scaleSize);
      if (isCoordsEqual(coordX, coordY)) {
        canvasContext.fillRect(coordX, coordY, 1, 1);
      }
    }
  });
}
