import checkButton from './misc/checkButton';

export default function penController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const scaleSize = document.getElementsByClassName('main__workspace__canvas')[0].width / frameScale;

  canvasWrapper.addEventListener('mousedown', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if (checkButton(0)) {
      const coordX = Math.floor(event.offsetX / scaleSize);
      const coordY = Math.floor(event.offsetY / scaleSize);
      canvasContext.fillRect(coordX, coordY, 1, 1);
    }
  });
  canvasWrapper.addEventListener('mousemove', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if ((checkButton(0)) && (canvas.classList.contains('active'))) {
      const coordX = Math.floor(event.offsetX / scaleSize);
      const coordY = Math.floor(event.offsetY / scaleSize);
      canvasContext.fillRect(coordX, coordY, 1, 1);
    }
  });
}
