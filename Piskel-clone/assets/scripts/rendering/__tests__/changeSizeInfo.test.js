import changeSizeInfo from '../changeSizeInfo';

test('should change element`s inner html', () => {
  document.body.innerHTML = '<div>'
        + '  <div class="main__workspace__size-scale" scale="32" />'
        + '  <div class="main__workspace__size-scale__current-size-display" />'
        + '</div>';
  changeSizeInfo();
  expect(document.getElementsByClassName('main__workspace__size-scale__current-size-display')[0].innerHTML).toEqual('[32x32]');
});
