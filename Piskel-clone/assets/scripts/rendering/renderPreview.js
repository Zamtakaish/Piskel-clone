import addNewElement from './addNewElement';
import updatePreview from './updatePreview';

export default function renderPreview() {
  const parent = document.getElementsByClassName('main__workspace__preview_wrapper')[0];
  const current = parent.getElementsByClassName('current')[0];
  let id;
  if (!current) {
    id = 'p1';
  } else {
    id = `p${(+(parent.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  const newElement = addNewElement('canvas', 'main__workspace__preview', parent, id);
  newElement.classList += ' current';

  const previewSize = Math.floor(getComputedStyle(parent).height.slice(0, -2) / 32) * 32;
  newElement.width = previewSize;
  newElement.height = previewSize;
  updatePreview();
}
