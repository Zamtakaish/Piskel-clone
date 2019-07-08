export default function bucketController() {
  const buttonContainer = document.getElementsByClassName('main__workspace__tools__items')[0];
  const buttons = document.getElementsByClassName('main__workspace__tools__items__tool');
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const canvas = workspace.getElementsByClassName('current')[0];
  const canvasContext = canvas.getContext('2d');

  function bucketHandler(event) {
    const canvasWidth = +canvas.getAttribute('width');
    const canvasData = canvasContext.getImageData(0, 0, canvasWidth, canvasWidth);
    const eventPixel = (event.offsetY * canvasWidth) + (event.offsetX);
    const scaledLength = canvasWidth / 32;
    const scaledPixel = (Math.floor(event.offsetY / scaledLength) * 32) + (Math.floor(event.offsetX / scaledLength));
    const eventPixelColor = `rgba(${canvasData.data[eventPixel * 4]}, ${canvasData.data[eventPixel * 4 + 1]}, ${canvasData.data[eventPixel * 4 + 2]}, ${canvasData.data[eventPixel * 4 + 3]})`;
    const fillColor = `rgba${document.getElementById('curr-color').style.backgroundColor.slice(3, -1)}, 255)`;
    const suitablePixelStack = [scaledPixel];

    function matchStartColor(currentPixelColor) {
      return currentPixelColor === eventPixelColor;
    }

    function colorPixel(pixel) {
      const fillColorArray = fillColor.replace(/[^\d,]/g, '').split(',');
      canvasData.data[pixel * 4] = +fillColorArray[0];
      canvasData.data[pixel * 4 + 1] = +fillColorArray[1];
      canvasData.data[pixel * 4 + 2] = +fillColorArray[2];
      canvasData.data[pixel * 4 + 3] = 255;
    }

    function fillPixel() {
      while (suitablePixelStack.length) {
        let currentPixel = suitablePixelStack.pop();
        const currentPixelColor = `rgba(${canvasData.data[currentPixel * scaledLength * 4]}, ${canvasData.data[currentPixel * 4 + 1]}, ${canvasData.data[currentPixel * 4 + 2]}, ${canvasData.data[currentPixel * 4 + 3]})`;

        while (((currentPixel - 32) > 0) && matchStartColor(currentPixelColor)) {
          currentPixel -= 32;
        }
        console.log(currentPixel);
        let reachLeft = false;
        let reachRight = false;
        while ((currentPixel < 1024) && matchStartColor(currentPixelColor)) {
          canvasContext.fillRect(currentPixel % 32, Math.floor(currentPixel / 32), 1, 1);

          const newPixel = Math.floor(currentPixel / 32) * canvasWidth + (currentPixel % 32) * scaledLength;

          if ((currentPixel % 32) !== 0) {
            const newPixelColor = `rgba(${canvasData.data[(newPixel - scaledLength) * 4]}, ${canvasData.data[(newPixel - scaledLength) * 4 + 1]}, ${canvasData.data[(newPixel - scaledLength) * 4 + 2]}, ${canvasData.data[(newPixel - scaledLength) * 4 + 3]})`;
            console.log(newPixel);
            if (matchStartColor(newPixelColor)) {
              if (!reachLeft) {
                suitablePixelStack.push(currentPixel - 1);
                reachLeft = true;
              }
            } else if (reachLeft) {
              reachLeft = false;
            }
          }

          if (((currentPixel + 1) % 32) !== 0) {
            const newPixelColor = `rgba(${canvasData.data[(newPixel + 1) * 4]}, ${canvasData.data[(newPixel + 1) * 4 + 1]}, ${canvasData.data[(newPixel + 1) * 4 + 2]}, ${canvasData.data[(newPixel + 1) * 4 + 3]})`;
            if (matchStartColor(newPixelColor)) {
              if (!reachRight) {
                suitablePixelStack.push(currentPixel + 1);
                reachRight = true;
              }
            } else if (reachRight) {
              reachRight = false;
            }
          }
          currentPixel += 32;
        }
      }
    }

    canvasContext.fillStyle = fillColor;
    if (buttonContainer.getElementsByClassName('active')[0] === buttons[2]) {
      const currCanvas = workspace.getElementsByClassName('current')[0];
      const currContext = currCanvas.getContext('2d');
      currContext.fillStyle = document.getElementById('curr-color').style.backgroundColor;
      currContext.fillRect(0, 0, canvas.width, canvas.width);
      /*      if (fillColor !== eventPixelColor) {
        fillPixel();
      } */
    }
  }

  return workspace.addEventListener('mousedown', bucketHandler);
}
