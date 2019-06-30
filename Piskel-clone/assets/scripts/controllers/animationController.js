const GIF = require('../gif/gif');

export default function animationController() {
  const button = document.getElementsByClassName('footer_button_animate')[0];

  function runAnimation() {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('main__workspace__canvas');
      const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
      const tempContext = canvasTemp.getContext('2d');
      let canvasContext;
    const animation = new GIF({
      workers: 10,
      quality: 2,
      width: 200,
      height: 200,
      transparent: 0x00FF00,
    });
    for (let i = 1; i < canvas.length; i += 1) {
        canvasContext = canvas[i].getContext('2d');
/*        tempContext.clearRect(0, 0, canvas[i].width, canvas[i].height);
        tempContext.drawImage(canvas[i], 0, 0, canvas[i].width, canvas[i].height, 0, 0, canvas[i].width, canvas[i].height);

      const tempData = tempContext.getImageData(0, 0, +canvas[i].width, +canvas[i].width);
      console.log(tempData.data);
      for (let j = 0; j < tempData.data.length; j += 4) {
        if (tempData.data[j + 3] === 0) {
            tempData.data[j + 3] = 255;
          tempData.data[j + 1] = 255;
        }
      }
        console.log(tempData.data);
        tempContext.putImageData(tempData, 0, 0);*/
        animation.addFrame(canvasContext, { delay: 200 });
    }


    animation.on('finished', (blob) => {
      window.open(URL.createObjectURL(blob));
      const preview = document.getElementsByClassName('main__workspace__preview_img')[0];
        preview.style.visibility = 'visible';
      preview.setAttribute('src', URL.createObjectURL(blob));
    });
    animation.render();
  }

  return button.addEventListener('click', runAnimation);
}
