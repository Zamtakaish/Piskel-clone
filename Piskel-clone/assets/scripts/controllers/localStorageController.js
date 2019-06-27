export default function resetLocalStorage() {
  const reset = document.getElementsByClassName('footer_button_reset')[0];
  reset.addEventListener('click', (event) => {
    if (event.which === 1) {
      localStorage.clear();
      document.location.reload();
    }
  });
}
