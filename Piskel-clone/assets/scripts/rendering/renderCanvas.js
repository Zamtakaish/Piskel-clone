import addNewElement from './addNewElement';
import canvasController from '../controllers/canvasController';

export default function renderCanvas(copiedElemId) {
  const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const current = canvasList.getElementsByClassName('current')[0];
    const copiedElement = document.getElementById(copiedElemId);
  let id;
  if (!current) {
    id = 'c1';
  } else {
    id = `c${(+(canvasList.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  const newElement = addNewElement('canvas', 'main__workspace__canvas', canvasList, id);
  newElement.classList += ' current';
  newElement.width = copiedElement.width;
  newElement.height = copiedElement.height;
  if (arguments.length) {
    const context = newElement.getContext('2d');

    //context.drawImage(document.getElementById(copiedElemId), 0, 0);
      console.log(copiedElement.getContext('2d').getImageData(0,0, copiedElement.width, copiedElement.width).data);
      context.clearRect(0,0, copiedElement.width,copiedElement.width);
      context.drawImage(copiedElement, 0, 0, copiedElement.width, copiedElement.width, 0, 0, newElement.width, newElement.height);
  }
  canvasController(newElement);
}
