import renderLayer from '../rendering/renderLayer';
import renderCanvas from '../rendering/renderCanvas';
import renderPreview from '../rendering/renderPreview';
import renderAnimation from '../rendering/renderAnimation';

export default function layerEventController() {
  const layersList = document.getElementsByClassName('main__workspace__layers')[0];
  document.getElementById('add-layer').addEventListener('click', () => {
    renderLayer();
    renderCanvas();
    renderPreview();
  });
  layersList.addEventListener('click', (event) => {
    const eventElement = event.target;
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    const preview = document.getElementsByClassName('main__workspace__preview_wrapper')[0];
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
      const currentPreview = document.getElementsByClassName('main__workspace__preview_wrapper')[0].getElementsByClassName('current')[0];
      currentPreview.className = currentPreview.className.replace(' current', '');
      const newPreview = document.getElementById(`p${eventId}`);
      newPreview.classList += ' current';
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__make-copy_icon')) {
      const copiedElemId = `c${event.target.parentElement.parentElement.parentElement.getAttribute('id').slice(1)}`;
      renderLayer();
      renderCanvas(copiedElemId);
      renderPreview();
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__delete_icon')) {
      const deletedEl = event.target.parentElement.parentElement.parentElement;
      const elementId = deletedEl.getAttribute('id').slice(1);
      layersList.removeChild(deletedEl);
      canvas.removeChild(document.getElementById(`c${elementId}`));
      preview.removeChild(document.getElementById(`p${elementId}`));
      layersList.firstElementChild.classList += ' current';
      const newId = `c${layersList.firstElementChild.getAttribute('id').slice(1)}`;
      document.getElementById(newId).classList += ' current';
      document.getElementsByClassName('main__workspace__preview')[0].classList += ' current';
      renderAnimation();
    }
  });
}
