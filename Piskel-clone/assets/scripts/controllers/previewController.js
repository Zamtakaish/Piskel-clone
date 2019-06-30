import renderPreview from '../rendering/renderPreview';

export default function previewController() {
  const wrapper = document.getElementsByClassName('main__workspace__preview_wrapper')[0];
  const canvasPreview = document.getElementsByClassName('main__workspace__preview')[0];
  const canvasPreviewSize = Math.floor(getComputedStyle(wrapper).height.slice(0, -2) / 32) * 32 * 0.8;
  const canvasWrapper = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];

  canvasPreview.width = canvasPreviewSize;
  canvasPreview.height = canvasPreviewSize;

  return canvasWrapper.addEventListener('mouseup', renderPreview);
}
