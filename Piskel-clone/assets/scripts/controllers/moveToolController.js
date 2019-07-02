import checkButton from './misc/checkButton';

export default function moveToolController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
  const tempContext = canvasTemp.getContext('2d');
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const stepScale = canvasWrapper.getElementsByClassName('current')[0].width / frameScale;
  const preview = document.getElementsByClassName('main__workspace__preview')[0];
  const previewContext = preview.getContext('2d');

  let startX;
  let startY;
  tempContext.imageSmoothingEnabled = false;
  tempContext.mozImageSmoothingEnabled = false;
  tempContext.webkitImageSmoothingEnabled = false;
  tempContext.msImageSmoothingEnabled = false;

  canvasWrapper.addEventListener('mousedown', (event) => {
    if (checkButton(7)) {
      startX = event.offsetX;
      startY = event.offsetY;
    }
  });
  canvasWrapper.addEventListener('mousemove', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if ((checkButton(7)) && (canvas.classList.contains('active'))) {
      if (Math.abs(event.offsetX - startX) > stepScale) {
        if (Math.floor(event.offsetX - startX) > 0) {
          tempContext.drawImage(canvas, 0, 0, canvas.width - stepScale, canvas.height, stepScale, 0, canvas.width, canvas.height);
        } else {
          tempContext.drawImage(canvas, stepScale, 0, canvas.width, canvas.height, 0, 0, canvas.width - stepScale, canvas.height);
        }
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(canvasTemp, 0, 0, canvas.width, canvas.height, 0, 0, frameScale, frameScale);
        previewContext.clearRect(0, 0, canvas.width, canvas.height);
        previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, preview.width, preview.height);
        tempContext.clearRect(0, 0, canvas.width, canvas.height);
        startX = event.offsetX;
      }
      if (Math.abs(event.offsetY - startY) > stepScale) {
        if (Math.floor(event.offsetY - startY) > 0) {
          tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height - stepScale, 0, stepScale, canvas.width, canvas.height);
        } else {
          tempContext.drawImage(canvas, 0, stepScale, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height - stepScale);
        }
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(canvasTemp, 0, 0, canvas.width, canvas.height, 0, 0, frameScale, frameScale);
        previewContext.clearRect(0, 0, canvas.width, canvas.height);
        previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, preview.width, preview.height);
        tempContext.clearRect(0, 0, canvas.width, canvas.height);
        startY = event.offsetY;
      }
    }
  });
}
