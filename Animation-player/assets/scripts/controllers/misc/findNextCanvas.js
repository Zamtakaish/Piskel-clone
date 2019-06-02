export default function findNextCanvas(current) {
  if ((current.nextElementSibling) && (current.nextElementSibling.classList.contains('main__workspace__canvas'))) {
    return current.nextElementSibling;
  }
  return document.getElementsByClassName('main__workspace__canvas_wrapper')[0].firstElementChild;
}
