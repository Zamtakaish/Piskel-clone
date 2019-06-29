export default function previewController() {
  const wrapper = document.getElementsByClassName('main__workspace__preview_wrapper')[0];
  const canvas = document.getElementsByClassName('main__workspace__preview')[0];
  const canvasContext = canvas.getContext('2d');
  const canvasSize = Math.floor(getComputedStyle(wrapper).height.slice(0, -2) / 32) * 32 * 0.8;

  canvas.width = canvasSize;
  canvas.height = canvasSize;
  canvasContext.scale(canvasSize / 32, canvasSize / 32);
}
