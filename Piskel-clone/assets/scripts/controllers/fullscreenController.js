import addNewElement from '../rendering/addNewElement';

export default function fullscreenController() {
  document.getElementsByClassName('footer_button_fullscreen')[0].addEventListener('click', () => {
    const preview = document.getElementsByClassName('main__workspace__preview_img')[0];
    /*const newElement = addNewElement('div', 'main__workspace__canvas_wrapper__fullscreen_button', preview);
    newElement.innerHTML = 'Turn off fullscreen';
    newElement.addEventListener('click', () => {
      document.exitFullscreen();
      preview.removeChild(newElement);
    });*/
    preview.requestFullscreen();
  });
}
