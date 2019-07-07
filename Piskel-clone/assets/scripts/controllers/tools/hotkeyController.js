import setActiveTool from './utility/setActiveTool';

export default function hotkeyController() {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyP': {
        setActiveTool(0);
        break;
      }
      case 'KeyO': {
        setActiveTool(1);
        break;
      }
      case 'KeyB': {
        setActiveTool(2);
        break;
      }
      case 'KeyE': {
        setActiveTool(3);
        break;
      }
      case 'KeyR': {
        setActiveTool(4);
        break;
      }
      case 'KeyC': {
        setActiveTool(5);
        break;
      }
      case 'KeyL': {
        setActiveTool(6);
        break;
      }
      case 'KeyM': {
        setActiveTool(7);
        break;
      }
      case 'KeyD': {
        setActiveTool(8);
        break;
      }
      case 'KeyT': {
        setActiveTool(9);
        break;
      }
      default: break;
    }
  });
}
