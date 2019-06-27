import toolsController from './toolsController';
import layerEventController from './layerEventController';
import canvasController from './canvasController';
import localStorageController from './localStorageController';
import animationController from './animationController';
import fullscreenController from './fullscreenController';
import fpsController from './fpsController';

export default function runControllers() {
  toolsController();
  layerEventController();
  canvasController(document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0]);
  localStorageController();
  animationController();
  fpsController();
  fullscreenController();
}
