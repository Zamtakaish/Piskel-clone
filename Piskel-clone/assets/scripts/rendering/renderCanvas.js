import addNewElement from './addNewElement';
import canvasController from '../controllers/canvasController';

export default function renderCanvas(copiedElemId) {
  const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const workspace = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const workspaceSize = Math.floor(getComputedStyle(workspace).width.slice(0, -2) / 32) * 32;
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
  newElement.width = workspaceSize;
  newElement.height = workspaceSize;
  const newElementContext = newElement.getContext('2d');
  // context.drawImage(document.getElementById(copiedElemId), 0, 0);
  //context.clearRect(0, 0, workspaceSize.width, workspaceSize.width);
  if (arguments.length) {
      console.log(copiedElement.getContext('2d').getImageData(0, 0, workspaceSize, workspaceSize).data);
    newElementContext.drawImage(copiedElement, 0, 0, workspaceSize, workspaceSize, 0, 0, newElement.width, newElement.height);
  }

  canvasController(newElement);
}
