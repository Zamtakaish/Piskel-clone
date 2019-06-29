export default function eraserController() {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvas = workspace.getElementsByClassName('current')[0];
  const canvasContext = canvas.getContext('2d');
  const scaleSize = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32);

    canvasContext.fillStyle = document.getElementById('curr-color').getAttribute('style').slice(18).slice(0, -1);

  function eraseHandler(event) {
    if (buttonContainer.getElementsByClassName('active')[0] === buttons[3]) {
      if (canvas.classList.contains('active')) {
        canvasContext.clearRect(Math.floor(event.offsetX / scaleSize), Math.floor(event.offsetY / scaleSize), 1, 1);
      }
    }
  }
  return workspace.addEventListener('mousemove', eraseHandler);
}
