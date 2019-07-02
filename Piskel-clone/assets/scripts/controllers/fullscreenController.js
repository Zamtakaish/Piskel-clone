export default function fullscreenController() {
  document.getElementsByClassName('footer_button_fullscreen')[0].addEventListener('click', () => {
    const preview = document.getElementsByClassName('main__workspace__preview__animation_img')[0];
    preview.requestFullscreen();
  });
}
