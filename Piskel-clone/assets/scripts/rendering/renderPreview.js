export default function renderPreview() {
  const canvasPreview = document.getElementsByClassName('main__workspace__preview')[0];
  const canvasPreviewContext = canvasPreview.getContext('2d');
  const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0];
  canvasPreviewContext.clearRect(0, 0, canvasPreview.width, canvasPreview.height);
  canvasPreviewContext.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvasPreview.width, canvasPreview.height);
}
