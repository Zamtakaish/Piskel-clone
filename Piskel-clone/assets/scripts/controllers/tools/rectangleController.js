import checkButton from './utility/checkButton';
import updatePreview from '../../rendering/updatePreview';

export default function rectangleController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
  const tempContext = canvasTemp.getContext('2d');
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const scaleSize = canvasWrapper.getElementsByClassName('current')[0].width / frameScale;
  let startX;
  let startY;
  let currentX;
  let currentY;

  function drawRect(context) {
    switch (true) {
      case ((currentX - startX === 0) && (currentY - startY > 0)): {
        context.strokeRect(startX + 0.5, startY, 0, currentY - startY + 1);
        break;
      }
      case ((currentX - startX === 0) && (currentY - startY < 0)): {
        context.strokeRect(startX + 0.5, startY + 1, 0, currentY - startY - 1);
        break;
      }
      case ((currentX - startX > 0) && (currentY - startY === 0)): {
        context.strokeRect(startX, startY + 0.5, currentX - startX + 1, 0);
        break;
      }
      case ((currentX - startX < 0) && (currentY - startY === 0)): {
        context.strokeRect(startX + 1, startY + 0.5, currentX - startX - 1, 0);
        break;
      }
      default: {
        context.strokeRect(startX + 0.5, startY + 0.5, currentX - startX, currentY - startY);
        break;
      }
    }
  }

  canvasWrapper.addEventListener('mousedown', (event) => {
    if (checkButton(4)) {
      startX = Math.floor(event.offsetX / scaleSize);
      startY = Math.floor(event.offsetY / scaleSize);
      currentX = startX;
      currentY = startY;
      tempContext.save();
      tempContext.fillStyle = document.getElementById('curr-color').style.backgroundColor;
      tempContext.strokeStyle = document.getElementById('curr-color').style.backgroundColor;
      tempContext.scale(scaleSize, scaleSize);
      tempContext.fillRect(currentX, currentY, 1, 1);
    }
  });
  canvasWrapper.addEventListener('mousemove', (event) => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    if ((checkButton(4)) && (canvas.classList.contains('active'))) {
      currentX = Math.floor(event.offsetX / scaleSize);
      currentY = Math.floor(event.offsetY / scaleSize);
      tempContext.clearRect(0, 0, frameScale, frameScale);
      tempContext.fillRect(currentX, currentY, 1, 1);
      drawRect(tempContext);
    }
  });
  function render() {
    if (checkButton(4)) {
      const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
      const canvasContext = canvas.getContext('2d');
      canvasContext.strokeStyle = document.getElementById('curr-color').style.backgroundColor;
      drawRect(canvasContext);
      tempContext.restore();
      tempContext.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
      updatePreview();
    }
  }
  function abort() {
    tempContext.restore();
    tempContext.clearRect(0, 0, canvasTemp.width, canvasTemp.height);
  }
  canvasWrapper.addEventListener('mouseup', render);
  canvasWrapper.addEventListener('mouseleave', abort);
}
