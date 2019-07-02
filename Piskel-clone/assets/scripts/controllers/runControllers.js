import toolsController from './toolsController';
import layerEventController from './layerEventController';
import canvasController from './canvasController';
import localStorageController from './localStorageController';
import animationController from './animationController';
import fullscreenController from './fullscreenController';
import fpsController from './fpsController';
import eraserController from './eraserController';
import bucketController from './bucketController';
import previewController from './previewController';
import scalingController from './scalingController';
import swapColorsController from './swapColorsController';
import moveToolController from './moveToolController';
import rectangleController from './rectangleController';
import workspaceInit from '../rendering/workspaceInit';

export default function runControllers() {
    workspaceInit();
  toolsController();
  eraserController();
  layerEventController();
  localStorageController();
  previewController();
  scalingController();
  animationController();
  fpsController();
  fullscreenController();
  swapColorsController();
  moveToolController();
  rectangleController();
}
