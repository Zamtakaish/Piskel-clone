import 'babel-polyfill';

const download = require('downloadjs');

export default function downloadController() {
  const downloadButton = document.getElementsByClassName('footer_button_download')[0];
  async function downloadHandler() {
    const source = document.getElementsByClassName('main__workspace__preview__animation_img')[0].getAttribute('src');
    const blob = await fetch(source).then(r => r.blob());
    download(blob, 'Piskel', 'image/gif');
  }

  return downloadButton.addEventListener('click', downloadHandler);
}
