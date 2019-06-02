import addNewElement from './addNewElement';
import canvasController from '../controllers/canvasController';

export default function renderCanvas(copiedElemId) {
  const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const current = canvasList.getElementsByClassName('current')[0];
  let id;
  if (!current) {
    id = 'c1';
  } else {
    id = `c${(+(canvasList.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  const newElement = addNewElement('canvas', 'main__workspace__canvas', canvasList, id);
  newElement.setAttribute('width', '580');
  newElement.setAttribute('height', '580');
  newElement.classList += ' current';
  if (arguments.length) {
    const context = newElement.getContext('2d');
    context.drawImage(document.getElementById(copiedElemId), 0, 0);
  }
  canvasController(newElement);
}
