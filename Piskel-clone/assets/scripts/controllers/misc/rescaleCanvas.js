import canvasController from '../canvasController';

export default function rescaleCanvas(direction) {
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
  const preview = document.getElementsByClassName('main__workspace__preview')[0];
  const canvasContext = canvas.getContext('2d');
  const tempContext = canvasTemp.getContext('2d');
  const previewContext = preview.getContext('2d');
  canvasTemp.width = canvas.width;
  canvasTemp.height = canvas.height;
  tempContext.imageSmoothingEnabled = false;
  tempContext.mozImageSmoothingEnabled = false;
  tempContext.webkitImageSmoothingEnabled = false;
  tempContext.msImageSmoothingEnabled = false;
  if (direction) {
    tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, (+canvas.width / 2), (+canvas.height / 2));
  } else {
    tempContext.drawImage(canvas, 0, 0, (+canvas.width / 2), (+canvas.height / 2), 0, 0, canvas.width, canvas.height);
  }
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);

  canvasContext.drawImage(canvasTemp, 0, 0, canvas.width, canvas.height, 0, 0, 32, 32);
  previewContext.clearRect(0, 0, canvas.width, canvas.height);
  previewContext.drawImage(canvasTemp, 0, 0, canvas.width, canvas.height, 0, 0, preview.width, preview.height);
  tempContext.clearRect(0, 0, canvas.width, canvas.height);
}
