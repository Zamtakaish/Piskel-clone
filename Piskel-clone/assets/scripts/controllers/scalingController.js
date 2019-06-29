import rescaleCanvas from './misc/rescaleCanvas';

export default function scalingController() {
  const wrapper = document.getElementsByClassName('main__workspace__size-scale')[0];

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
      } else {
        rescaleCanvas(false);
      }
      wrapper.setAttribute('scale', nextScale);
    }
  }

  return wrapper.addEventListener('click', rescaleHandler);
}
