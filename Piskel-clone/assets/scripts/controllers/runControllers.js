import toolsController from './tools/toolsController';
import framesController from './frames/framesController';
import localStorageController from './localStorageController';
import fullscreenController from './utility buttons/fullscreenController';
import fpsController from './utility buttons/fpsController';
import previewController from './canvas/previewController';
import scalingController from './utility buttons/scalingController';
import workspaceInit from '../rendering/workspaceInit';
import downloadController from './utility buttons/downloadController';


export default function runControllers() {
  workspaceInit();
  previewController();
  framesController();
  toolsController();
  scalingController();
  fpsController();
  fullscreenController();
  downloadController();
  localStorageController();
}
