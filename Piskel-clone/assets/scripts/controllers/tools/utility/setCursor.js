export default function setCursor(index) {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  switch (index) {
    case 0:
    case 8: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/pencil.png) 2 30, default';
      break;
    }
    case 1: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/color-picker.png) 2 30, default';
      break;
    }
    case 2: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/bucket.png) 2 30, default';
      break;
    }
    case 3: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/eraser.png) 2 30, default';
      break;
    }
    case 4:
    case 5:
    case 6: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/crosshair.png) 16 16, default';
      break;
    }
    case 7: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/move.png) 16 16, default';
      break;
    }
    case 9: {
      canvasWrapper.style.cursor = 'url(assets/pictures/cursor/rotate.png) 16 16, default';
      break;
    }
    default: break;
  }
}
