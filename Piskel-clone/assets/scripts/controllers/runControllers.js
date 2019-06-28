import toolsController from './toolsController';
import layerEventController from './layerEventController';
import canvasController from './canvasController';
import localStorageController from './localStorageController';
import animationController from './animationController';
import fullscreenController from './fullscreenController';
import fpsController from './fpsController';
import eraserController from './eraserController';

export default function runControllers() {
  toolsController();
  eraserController();
  layerEventController();
  canvasController(document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0]);
  localStorageController();
  animationController();
  fpsController();
  fullscreenController();
}
