export default function addNewElement(tagName, className, parentTag, id) {
  const newElement = document.createElement(tagName);
  newElement.className += className;
  if (arguments.length > 3) {
    newElement.id = id;
  }
  parentTag.appendChild(newElement);
  return newElement;
}
