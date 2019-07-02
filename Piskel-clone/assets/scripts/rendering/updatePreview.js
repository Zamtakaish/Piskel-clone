import renderAnimation from './renderAnimation';

export default function updatePreview() {
  const canvasPreview = document.getElementsByClassName('main__workspace__preview_wrapper')[0].getElementsByClassName('current')[0];
  const previewContext = canvasPreview.getContext('2d');
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
  const tempContext = canvasTemp.getContext('2d');

  previewContext.imageSmoothingEnabled = false;
  previewContext.mozImageSmoothingEnabled = false;
  previewContext.webkitImageSmoothingEnabled = false;
  previewContext.msImageSmoothingEnabled = false;


  tempContext.clearRect(0, 0, canvas.width, canvas.height);
  tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);

  const tempData = tempContext.getImageData(0, 0, +canvas.width, +canvas.width);
  for (let j = 0; j < tempData.data.length; j += 4) {
    if (tempData.data[j + 3] === 0) {
      tempData.data[j + 3] = 255;
      tempData.data[j + 1] = 255;
    }
  }
  tempContext.putImageData(tempData, 0, 0);
  previewContext.drawImage(canvasTemp, 0, 0, canvasTemp.width, canvasTemp.height, 0, 0, canvasPreview.width, canvasPreview.height);
  tempContext.clearRect(0, 0, canvas.width, canvas.height);
  renderAnimation();
  // previewContext.clearRect(0, 0, canvasPreview.width, canvasPreview.height);
  // previewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvasPreview.width, canvasPreview.height);
}
