export default function renderCurrentCoords(event) {
  const canvasSize = +document.getElementsByClassName('main__workspace__canvas_temp')[0].width;
  const currentScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const stepSize = canvasSize / currentScale;
  const coordsPreview = document.getElementsByClassName('main__workspace__size-scale__current-coords-display')[0];
  if (arguments.length) {
    const currentX = Math.floor(event.offsetX / stepSize);
    const currentY = Math.floor(event.offsetY / stepSize);
    coordsPreview.innerHTML = `[${currentX} X: ${currentY} Y]`;
  } else {
    coordsPreview.innerHTML = '[ : ]';
  }
}
