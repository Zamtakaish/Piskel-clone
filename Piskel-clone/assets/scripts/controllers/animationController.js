import animationIterator from './misc/animationIterator';

export default function animationController() {
  const animateButton = document.getElementsByClassName('footer_button_animate')[0];
  animateButton.addEventListener('click', () => {
    animationIterator(1000 / (+document.getElementById('fps').getAttribute('value')));
  });
}
