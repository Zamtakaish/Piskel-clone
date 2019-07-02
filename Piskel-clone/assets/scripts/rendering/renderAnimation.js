const GIF = require('../gif/gif');

export default function renderAnimation() {
  const canvasPreview = document.getElementsByClassName('main__workspace__preview');

  let previewContext;
  const animation = new GIF({
    workers: 10,
    quality: 2,
    width: document.getElementsByClassName('main__workspace__preview')[0].width,
    height: document.getElementsByClassName('main__workspace__preview')[0].height,
    transparent: 0x00FF00,
  });
  for (let i = 0; i < canvasPreview.length; i += 1) {
    previewContext = canvasPreview[i].getContext('2d');
    animation.addFrame(previewContext, { delay: 200 });
  }

  animation.on('finished', (blob) => {
    const preview = document.getElementsByClassName('main__workspace__preview__animation_img')[0];
    preview.style.visibility = 'visible';
    preview.setAttribute('src', URL.createObjectURL(blob));
  });
  animation.render();
}
