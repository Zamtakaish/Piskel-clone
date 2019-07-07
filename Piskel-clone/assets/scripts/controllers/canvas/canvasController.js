import renderCurrentCoords from '../../rendering/renderCurrentCoords';

export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const scaleSize = canvas.width / frameScale;
  canvasContext.scale(scaleSize, scaleSize);

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
