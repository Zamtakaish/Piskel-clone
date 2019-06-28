import setActiveTool from './misc/setActiveTool';
import colorPickerController from './colorPickerController';

export default function toolsController() {
  function setActiveByKeybind() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'KeyP': {
          setActiveTool(0);
          break;
        }
        case 'KeyO': {
          setActiveTool(1);
          break;
        }
        case 'KeyB': {
          setActiveTool(2);
          break;
        }
        case 'KeyE': {
          setActiveTool(3);
          break;
        }
        case 'KeyR': {
          setActiveTool(4);
          break;
        }
        case 'KeyC': {
          setActiveTool(5);
          break;
        }
        case 'KeyL': {
          setActiveTool(6);
          break;
        }
        case 'KeyM': {
          setActiveTool(7);
          break;
        }
        default: break;
      }
    });
  }

  function setActiveByClick() {
    for (let i = 0; i < 2; i += 1) {
      document.getElementsByClassName('main__workspace__tools__items__tool')[i].addEventListener('click', () => {
        setActiveTool(i);
      });
    }
  }
  return (function () {
    setActiveByClick();
    setActiveByKeybind();
    colorPickerController();
  }());
}
