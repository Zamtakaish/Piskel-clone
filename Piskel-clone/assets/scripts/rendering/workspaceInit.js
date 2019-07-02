import renderCanvas from './renderCanvas';
import renderPreview from './renderPreview';
import renderLayer from './renderLayer';

export default function workspaceInit() {
    const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    const workspaceSize = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32) * 32;
    const tempCanvas = document.getElementsByClassName('main__workspace__canvas_temp')[0];
    tempCanvas.width = workspaceSize;
    tempCanvas.height = workspaceSize;
  renderLayer();
  renderCanvas();
  renderPreview();
}
