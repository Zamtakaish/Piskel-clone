import renderLayer from '../rendering/renderLayer';
import renderCanvas from '../rendering/renderCanvas';

export default function layerEventController() {
  const layersList = document.getElementsByClassName('main__workspace__layers')[0];
  document.getElementById('add-layer').addEventListener('click', () => {
    renderLayer();
    renderCanvas();
  });
  layersList.addEventListener('click', (event) => {
    const eventElement = event.target;
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    if (eventElement.classList.contains('main__workspace__layers__layer')) {
      const currentLayer = layersList.getElementsByClassName('current')[0];
      let currentId;
      if (currentLayer) {
        currentId = currentLayer.getAttribute('id').slice(1);
        currentLayer.className = currentLayer.className.replace(' current', '');
      } else {
        currentId = '1';
      }
      const currentCanvas = document.getElementById(`c${currentId}`);
      currentCanvas.className = currentCanvas.className.replace(' current', '');

      const eventId = eventElement.parentElement.getAttribute('id').slice(1);
      const nextCanvas = document.getElementById(`c${eventId}`);
      eventElement.parentElement.classList += ' current';
      nextCanvas.classList += ' current';
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__make-copy_icon')) {
      const copiedElemId = `c${event.target.parentElement.parentElement.parentElement.getAttribute('id').slice(1)}`;
      renderLayer();
      renderCanvas(copiedElemId);
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__delete_icon')) {
      const deletedEl = event.target.parentElement.parentElement.parentElement;
      const elementId = deletedEl.getAttribute('id').slice(1);
      layersList.removeChild(deletedEl);
      canvas.removeChild(document.getElementById(`c${elementId}`));
    }
  });
}
