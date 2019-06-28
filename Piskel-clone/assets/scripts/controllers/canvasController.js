export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const workspaceWidth = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32) * 32;
  canvas.width = workspaceWidth;
  canvas.height = workspaceWidth;
  const scaleSize = workspaceWidth / 32;
  canvasContext.scale(scaleSize, scaleSize);
  canvas.addEventListener('mousedown', () => {
    canvas.className += ' active';
    canvasContext.fillStyle = document.getElementById('curr-color').getAttribute('style').slice(18).slice(0, -1);
  });
  canvas.addEventListener('mouseup', () => {
    canvas.className = canvas.className.replace(' active', '');
  });
  canvas.addEventListener('mouseleave', () => {
    canvas.className = canvas.className.replace(' active', '');
  });
  canvas.addEventListener('mousemove', (event) => {
    const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
    const buttons = document.getElementsByClassName('main__workspace__tools__items__tool')[0];
    if ((canvas.classList.contains('active')) && (buttonContainer.getElementsByClassName('active')[0] === buttons)) {
      canvasContext.fillRect(Math.floor(event.offsetX / scaleSize), Math.floor(event.offsetY / scaleSize), 1, 1);
    }
  });
}
