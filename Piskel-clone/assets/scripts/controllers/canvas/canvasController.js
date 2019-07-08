import renderCurrentCoords from '../../rendering/renderCurrentCoords';
import updatePreview from '../../rendering/updatePreview';

export default function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  const frameScale = +document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const scaleSize = canvas.width / frameScale;
  const canvasNumber = canvas.getAttribute('id').slice(1);
  canvasContext.scale(scaleSize, scaleSize);

  if (localStorage.getItem(`canvas${canvasNumber}`) !== null) {
    const dataUrl = localStorage.getItem(`canvas${canvasNumber}`);
    const dataImage = new Image();
    dataImage.src = dataUrl;
    dataImage.onload = function () {
      canvasContext.drawImage(dataImage, 0, 0, frameScale, frameScale);
    };
  }

  canvas.addEventListener('mousedown', () => {
    canvas.className += ' active';
    canvasContext.fillStyle = document.getElementById('curr-color').style.backgroundColor;
  });
  canvas.addEventListener('mouseup', () => {
    canvas.className = canvas.className.replace(' active', '');
    // const canvasDataJSON = JSON.stringify(canvasContext.getImageData(0, 0, canvas.width, canvas.width));
    localStorage.setItem(`canvas${canvasNumber}`, canvas.toDataURL());
  });
  canvas.addEventListener('mouseleave', () => {
    canvas.className = canvas.className.replace(' active', '');
    // const canvasDataJSON = JSON.stringify(canvasContext.getImageData(0, 0, canvas.width, canvas.width));
    localStorage.setItem(`canvas${canvasNumber}`, canvas.toDataURL());
    renderCurrentCoords();
  });
  canvas.addEventListener('mousemove', (event) => {
    renderCurrentCoords(event);
  });
}
