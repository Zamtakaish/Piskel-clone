import checkButton from './misc/checkButton';

export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const workspaceSize = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32) * 32;
  canvas.width = workspaceSize;
  canvas.height = workspaceSize;
  let scaleSize;

  function setCanvasScale(currentScale) {
    scaleSize = workspaceSize / currentScale;
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
  });
  canvas.addEventListener('mousemove', (event) => {
    if ((checkButton(0)) && (canvas.classList.contains('active'))) {
      canvasContext.fillRect(Math.floor(event.offsetX / scaleSize), Math.floor(event.offsetY / scaleSize), 1, 1);
    }
  });
}
