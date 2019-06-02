export default function fpsController() {
  const fpsSlider = document.getElementById('fps');
  fpsSlider.addEventListener('input', () => {
    fpsSlider.setAttribute('value', fpsSlider.value);
  });
}
