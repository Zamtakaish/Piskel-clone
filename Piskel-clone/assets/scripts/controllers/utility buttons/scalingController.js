import rescaleCanvas from '../canvas/utility/rescaleCanvas';
import changeSizeInfo from '../../rendering/changeSizeInfo';

export default function scalingController() {
  const wrapper = document.getElementsByClassName('main__workspace__size-scale')[0];
  const canvasArray = document.getElementsByClassName('main__workspace__canvas');
  changeSizeInfo();

  function rescaleHandler(event) {
    const currentSize = wrapper.getElementsByClassName('current')[0];
    const targetButton = event.target;
    if ((targetButton !== wrapper) && (targetButton !== currentSize)) {
      currentSize.className = currentSize.className.replace(' current', '');
      targetButton.className += ' current';
      const currentScale = wrapper.getAttribute('scale');
      const nextScale = targetButton.id.slice(1);
      if (+currentScale < +nextScale) {
        if (+currentScale * 2 < +nextScale) {
          for (let i = 1; i < canvasArray.length; i += 1) {
            const canvas = canvasArray[i];
            rescaleCanvas(canvas, true);
            rescaleCanvas(canvas, true);
          }
        } else {
          for (let i = 0; i < canvasArray.length; i += 1) {
            const canvas = canvasArray[i];
            rescaleCanvas(canvas, true);
          }
        }
      } else if (+currentScale > +nextScale * 2) {
        for (let i = 0; i < canvasArray.length; i += 1) {
          const canvas = canvasArray[i];
          rescaleCanvas(canvas, false);
          rescaleCanvas(canvas, false);
        }
      } else {
        for (let i = 0; i < canvasArray.length; i += 1) {
          const canvas = canvasArray[i];
          rescaleCanvas(canvas, false);
        }
      }
      wrapper.setAttribute('scale', nextScale);
      changeSizeInfo();
    }
  }

  return wrapper.addEventListener('click', rescaleHandler);
}
