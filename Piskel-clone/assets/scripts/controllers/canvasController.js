import renderCurrentCoords from '../rendering/renderCurrentCoords';

export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  const canvasSize = canvas.width;
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  let scaleSize;

  function setCanvasScale(currentScale) {
    scaleSize = canvasSize / currentScale;
    canvasContext.scale(scaleSize, scaleSize);
  }

  setCanvasScale(frameScale);

  canvas.addEventListener('mousedown', () => {
    canvas.className += ' active';
    canvasContext.fillStyle = document.getElementById('curr-color').style.backgroundColor;
  });
  canvas.addEventListener('mouseup', () => {
    canvas.className = canvas.className.replace(' active', '');
  });
  canvas.addEventListener('mouseleave', () => {
    canvas.className = canvas.className.replace(' active', '');
    renderCurrentCoords();
  });
  canvas.addEventListener('mousemove', (event) => {
    renderCurrentCoords(event);
  });
}
