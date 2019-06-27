import setActiveTool from './misc/setActiveTool';
import colorPickerController from './colorPickerController';

export default function toolsController() {
  function setActiveByKeybind() {
    KeyboardEvent.P = 'KeyP';
    KeyboardEvent.E = 'KeyE';
    document.addEventListener('keydown', (event) => {
      if (event.code === KeyboardEvent.P) {
        setActiveTool(0);
      }
      if (event.code === KeyboardEvent.E) {
        setActiveTool(1);
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
