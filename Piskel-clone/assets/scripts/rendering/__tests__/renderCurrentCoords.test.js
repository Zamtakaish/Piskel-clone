import renderCurrentCoords from '../renderCurrentCoords';

beforeEach(() => {
  document.body.innerHTML = '<div>'
        + '  <div class="main__workspace__size-scale" scale="32" />'
        + '  <div class="main__workspace__size-scale__current-coords-display" />'
        + '  <canvas class="main__workspace__canvas_temp" width="320" height="320" />'
        + '</div>';
});
describe('should correctly calculate and pass coordinates', () => {
  test('passing 0 in first place', () => {
    const eventObject = { offsetX: 250, offsetY: 150 };
    renderCurrentCoords(eventObject);
    expect(document.getElementsByClassName('main__workspace__size-scale__current-coords-display')[0].innerHTML).toEqual('[25 X : 15 Y]');
  });

  test('passing non-zero values in first place', () => {
    const eventObject = { offsetX: 95, offsetY: 292 };
    renderCurrentCoords(eventObject);
    expect(document.getElementsByClassName('main__workspace__size-scale__current-coords-display')[0].innerHTML).toEqual('[9 X : 29 Y]');
  });
  test('passing no coordinate object', () => {
    renderCurrentCoords();
    expect(document.getElementsByClassName('main__workspace__size-scale__current-coords-display')[0].innerHTML).toEqual('[ : ]');
  });
});
