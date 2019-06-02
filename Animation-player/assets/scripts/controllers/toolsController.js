import setActiveTool from './misc/setActiveTool';
import colorPickerController from './colorPickerController';

export default function toolsController() {
  function setActiveByKeybind() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'p' || event.key === 'P' || event.key === 'з' || event.key === 'З') {
        setActiveTool(0);
      }
      if (event.key === 'e' || event.key === 'E' || event.key === 'у' || event.key === 'У') {
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
