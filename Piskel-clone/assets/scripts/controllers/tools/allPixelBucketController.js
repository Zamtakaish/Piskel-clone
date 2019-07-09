import checkButton from './utility/checkButton';

export default function allPixelBucketController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const currentColor = document.getElementById('curr-color').style.backgroundColor;
  function paintAllHandler(event) {
    const canvas = canvasWrapper.getElementsByClassName('current')[0];
    const canvasContext = canvas.getContext('2d');
    if (checkButton(2)) {
      console.log('a');
      const canvasData = canvasContext.getImageData(0, 0, canvas.width, canvas.width);
      const eventPixel = (canvas.width * 4 * event.offsetY) + (event.offsetX * 4);
      const eventColor = `rgba(${canvasData.data[eventPixel]}, ${canvasData.data[eventPixel + 1]}, ${canvasData.data[eventPixel + 2]}, ${canvasData.data[eventPixel + 3]})`;
      const currentColorRGBA = `rgba${currentColor.slice(3).slice(0, -1)}, 255)`;
      console.log(eventColor, currentColorRGBA);
      if (eventColor !== currentColorRGBA) {
        const colorArray = currentColor.slice(4).slice(0, -1).split(', ');
        console.log(colorArray);
        for (let i = 0; i < canvasData.data.length; i += 4) {
          const currentPixelColor = `rgba(${canvasData.data[i]}, ${canvasData.data[i + 1]}, ${canvasData.data[i + 2]}, ${canvasData.data[i + 3]})`;
          console.log(currentPixelColor, currentColorRGBA);
          if (currentPixelColor === currentColorRGBA) {
            for (let j = 0; j < 3; j += 1) {
              canvasData.data[i + j] = +colorArray[j];
            }
            canvasData.data[i + 3] = 255;
          }
        }
      }
      canvasContext.putImageData(canvasData, 0, 0);
    }
  }
  return canvasWrapper.addEventListener('click', paintAllHandler);
}
