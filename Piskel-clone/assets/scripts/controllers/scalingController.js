export default function scalingController() {
  const wrapper = document.getElementsByClassName('main__workspace__size-scale')[0];

  function rescaleHandler(event) {
      const currentSize = wrapper.getElementsByClassName('current')[0];
    const targetButton = event.target;
    if ((targetButton !== wrapper) && (targetButton !== currentSize)) {
      currentSize.className = currentSize.className.replace(' current', '');
      targetButton.className += ' current';
      console.log()
      wrapper.setAttribute('scale', targetButton.id.slice(1));
    }
  }

  return wrapper.addEventListener('click', rescaleHandler);
}
