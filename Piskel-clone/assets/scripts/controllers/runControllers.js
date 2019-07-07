import toolsController from './toolsController';
import layerEventController from './layerEventController';
import localStorageController from './localStorageController';
import fullscreenController from './fullscreenController';
import fpsController from './fpsController';
import previewController from './previewController';
import scalingController from './scalingController';
import swapColorsController from './swapColorsController';
import workspaceInit from '../rendering/workspaceInit';
import downloadController from './downloadController';


export default function runControllers() {
  workspaceInit();
  previewController();
  layerEventController();
  toolsController();
  swapColorsController();
  scalingController();
  fpsController();
  fullscreenController();
  downloadController();
  localStorageController();
}
