export default function previewController() {
  const wrapper = document.getElementsByClassName('main__workspace__preview_wrapper')[0];
  const canvasPreview = document.getElementsByClassName('main__workspace__preview')[0];
  const canvasPreviewContext = canvasPreview.getContext('2d');
  const canvasPreviewSize = Math.floor(getComputedStyle(wrapper).height.slice(0, -2) / 32) * 32 * 0.8;
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];

  canvasPreview.width = canvasPreviewSize;
  canvasPreview.height = canvasPreviewSize;

  function renderPreview() {
    canvasPreviewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvasPreview.width, canvasPreview.height);
  }
  return canvas.addEventListener('mouseup', renderPreview);
}
