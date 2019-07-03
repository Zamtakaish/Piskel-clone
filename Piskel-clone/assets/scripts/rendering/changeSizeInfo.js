export default function changeSizeInfo() {
  const currentSize = document.getElementsByClassName('main__workspace__size-scale')[0].getAttribute('scale');
  const canvasSizeInfo = document.getElementsByClassName('main__workspace__size-scale__current-size-display')[0];
  canvasSizeInfo.innerHTML = `[${currentSize}x${currentSize}]`;
}
