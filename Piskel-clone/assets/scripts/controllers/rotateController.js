import checkButton from './misc/checkButton';
import updatePreview from '../rendering/updatePreview';

export default function rotateController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
  const tempContext = canvasTemp.getContext('2d');
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  const canvasContext = canvas.getContext('2d');

  canvasWrapper.addEventListener('click', () => {
    if (checkButton(9)) {
      tempContext.save();
      tempContext.rotate((Math.PI / 180) * 90);
      tempContext.translate(0, -canvasTemp.height);
      tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);
      tempContext.restore();
      canvasContext.clearRect(0, 0, 32, 32);
      canvasContext.drawImage(canvasTemp, 0, 0, canvas.width, canvas.height, 0, 0, 32, 32);
      updatePreview();
    }
  });
}
