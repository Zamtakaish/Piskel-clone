import penController from './penController';
import colorPickerController from './colorPickerController';
import bucketController from './bucketController';
import eraserController from './eraserController';
import rectangleController from './rectangleController';
import moveToolController from './moveToolController';
import ditheringController from './ditheringController';
import rotateController from './rotateController';
import activeToolController from './activeToolController';
import hotkeyController from './hotkeyController';
import swapColorsController from './swapColorsController';

export default function toolsController() {
  activeToolController();
  hotkeyController();
  penController();
  colorPickerController();
  bucketController();
  eraserController();
  rectangleController();
  moveToolController();
  ditheringController();
  rotateController();
  swapColorsController();
}
