import addNewElement from '../addNewElement';

test('should return HTML element', () => {
  document.body.innerHTML = '<div>'
        + '  <span id="username" />'
        + '  <button id="button" />'
        + '</div>';
  expect(typeof addNewElement('div', 'test', document.getElementById('username'))).toBe('object');
});
