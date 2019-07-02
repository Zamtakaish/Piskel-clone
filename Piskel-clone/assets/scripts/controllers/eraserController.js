import checkButton from './misc/checkButton';

export default function eraserController() {
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvas = workspace.getElementsByClassName('current')[0];
  const canvasContext = canvas.getContext('2d');
  const scaleSize = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32);

  function eraseHandler(event) {
    if (checkButton(3) && (canvas.classList.contains('active'))) {
      canvasContext.clearRect(Math.floor(event.offsetX / scaleSize), Math.floor(event.offsetY / scaleSize), 1, 1);
    }
  }
  return canvas.addEventListener('mousemove', eraseHandler);
}
