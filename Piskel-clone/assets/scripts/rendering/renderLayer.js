import addNewElement from './addNewElement';

export default function renderLayer() {
  let parent = document.getElementsByClassName('main__workspace__layers')[0];
  const current = parent.getElementsByClassName('current')[0];
  let id;
  if (!current) {
    id = 'l1';
  } else {
    id = `l${(+(parent.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  let newElement = addNewElement('div', 'main__workspace__layers__layer_wrapper', parent, id);

  newElement.classList += ' current';
  parent = newElement;
  newElement = addNewElement('div', 'main__workspace__layers__layer', parent);
  parent = newElement;
  newElement = addNewElement('img', 'main__workspace__layers__layer__make-copy_icon', addNewElement('div', 'main__workspace__layers__layer__make-copy', parent));
  newElement.setAttribute('src', 'assets/pictures/copy-icon.svg');
  newElement.setAttribute('alt', '');
  newElement = addNewElement('img', 'main__workspace__layers__layer__delete_icon', addNewElement('div', 'main__workspace__layers__layer__delete', parent));
  newElement.setAttribute('src', 'assets/pictures/trash-icon.svg');
  newElement.setAttribute('alt', '');
}
