import findNextCanvas from './findNextCanvas';

export default function animationIterator(interval) {
  const animationId = document.getElementsByClassName('footer_button_animate')[0];
  if (+animationId.getAttribute('animated') !== 0) {
    cancelAnimationFrame((+animationId.getAttribute('animated')));
    animationId.setAttribute('animated', '0');
    return;
  }
  let start = performance.now();
  const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  let currentCanvas = canvasList.getElementsByClassName('current')[0];
  let nextCanvas = findNextCanvas(currentCanvas);
  animationId.setAttribute('animated', requestAnimationFrame(function animate(time) {
    const timePassed = time - start;
    if (timePassed >= interval) {
      start = time;
      currentCanvas.className = currentCanvas.className.replace(' current', '');
      nextCanvas.classList += ' current';
      currentCanvas = nextCanvas;
      nextCanvas = findNextCanvas(currentCanvas);
      animationId.setAttribute('animated', requestAnimationFrame(animate));
    } else {
      animationId.setAttribute('animated', requestAnimationFrame(animate));
    }
  }));
}
