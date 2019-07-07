import updatePreview from '../../rendering/updatePreview';

export default function previewController() {
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];

  return canvasWrapper.addEventListener('mouseup', updatePreview);
}
