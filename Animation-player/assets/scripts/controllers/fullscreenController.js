import addNewElement from '../rendering/addNewElement';

export default function fullscreenController() {
  document.getElementsByClassName('footer_button_fullscreen')[0].addEventListener('click', () => {
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    const newElement = addNewElement('div', 'main__workspace__canvas_wrapper__fullscreen_button', canvas);
    newElement.innerHTML = 'Turn off fullscreen';
    newElement.addEventListener('click', () => {
      document.exitFullscreen();
      canvas.removeChild(newElement);
    });
    canvas.requestFullscreen();
  });
}
