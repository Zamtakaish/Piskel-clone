export default function swapColors() {
  const currentColor = document.getElementById('curr-color');
  const prevColor = document.getElementById('prev-color');
  const temp = getComputedStyle(prevColor).backgroundColor;
  prevColor.style.backgroundColor = getComputedStyle(currentColor).backgroundColor;
  currentColor.style.backgroundColor = temp;
}
