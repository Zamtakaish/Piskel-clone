import toolsController from './toolsController';
import layerEventController from './layerEventController';
import localStorageController from './localStorageController';
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
import downloadController from './downloadController';
import rotateController from './rotateController';

export default function runControllers() {
  workspaceInit();
  toolsController();
  eraserController();
  bucketController();
  layerEventController();
  localStorageController();
  previewController();
  scalingController();
  fpsController();
  fullscreenController();
  swapColorsController();
  moveToolController();
  rectangleController();
  downloadController();
  rotateController();
}
