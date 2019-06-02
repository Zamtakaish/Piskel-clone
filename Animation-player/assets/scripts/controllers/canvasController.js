export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  canvasContext.scale(10, 10);
  canvas.addEventListener('mousedown', () => {
    canvas.className += ' active';
    canvasContext.fillStyle = document.getElementById('curr-color').getAttribute('style').slice(18).slice(0, -1);
  });
  canvas.addEventListener('mouseup', () => {
    canvas.className = canvas.className.replace(' active', '');
  });
  canvas.addEventListener('mousemove', (event) => {
    const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
    const buttons = buttonContainer[0].getElementsByClassName('main__workspace__tools__items__tool')[0];
    if ((canvas.classList.contains('active')) && (buttonContainer.getElementsByClassName('active')[0] === buttons)) {
      canvasContext.fillRect(event.offsetX / 10, event.offsetY / 10, 1, 1);
    }
  });
}
