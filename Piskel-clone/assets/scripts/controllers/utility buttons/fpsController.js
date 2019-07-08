import renderAnimation from '../../rendering/renderAnimation';

export default function fpsController() {
  const fpsSlider = document.getElementById('fps');
  const fpsHihlight = document.getElementsByClassName('footer_button_animate-rate_highlight')[0];

  fpsSlider.addEventListener('mousedown', () => {
    fpsHihlight.style.visibility = 'visible';
    fpsHihlight.innerHTML = `${fpsSlider.value} fps`;
  });

  fpsSlider.addEventListener('input', () => {
    fpsSlider.setAttribute('value', fpsSlider.value);
    fpsHihlight.innerHTML = `${fpsSlider.value} fps`;
    renderAnimation();
  });

  fpsSlider.addEventListener('mouseup', () => {
    fpsHihlight.style.visibility = 'hidden';
  });
}
