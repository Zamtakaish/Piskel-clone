import rescaleCanvas from './misc/rescaleCanvas';

export default function scalingController() {
  const wrapper = document.getElementsByClassName('main__workspace__size-scale')[0];
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
    const canvasTemp = document.getElementsByClassName('main__workspace__canvas_temp')[0];
    canvasTemp.width = canvas.width;
    canvasTemp.height = canvas.height;

  function rescaleHandler(event) {
    const currentSize = wrapper.getElementsByClassName('current')[0];
    const targetButton = event.target;
    if ((targetButton !== wrapper) && (targetButton !== currentSize)) {
      currentSize.className = currentSize.className.replace(' current', '');
      targetButton.className += ' current';
      const currentScale = wrapper.getAttribute('scale');
      const nextScale = targetButton.id.slice(1);
      if (+currentScale < +nextScale) {
        rescaleCanvas(true);
        if (+currentScale * 2 < +nextScale) {
          rescaleCanvas(true);
        }
      } else {
        rescaleCanvas(false);
        if (+currentScale > +nextScale * 2) {
          rescaleCanvas(false);
        }
      }
      wrapper.setAttribute('scale', nextScale);
    }
  }

  return wrapper.addEventListener('click', rescaleHandler);
}
