const buttonContainer = document.getElementsByClassName('main__workspace__tools__items');

const buttons = buttonContainer[0].getElementsByClassName('main__workspace__tools__items__tool');


const reset = document.getElementsByClassName('footer_button_reset')[0];


function setActive() {
  function resetActiveClass(index) {
    const current = buttonContainer[0].getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }

    buttons[index].className += ' active';
  }

  function setActiveByKeybind() {
    document.addEventListener('keydown', (event) => {
      if (event.key === 'p' || event.key === 'P' || event.key === 'з' || event.key === 'З') {
        resetActiveClass(0);
      }

      if (event.key === 'e' || event.key === 'E' || event.key === 'у' || event.key === 'У') {
        resetActiveClass(1);
      }
    });
  }

  function setActiveByClick() {
    for (let i = 0; i < 2; i += 1) {
      buttons[i].addEventListener('click', () => {
        resetActiveClass(i);
      });
    }
  }


  return (function () {
    setActiveByClick();

    setActiveByKeybind();
  }());
}


function chooseColor() {
  document.getElementById('curr-color').style.backgroundColor = getComputedStyle(document.getElementById('curr-color')).backgroundColor;
  function chooseColorHandler(event) {
    const menuButton = document.elementFromPoint(event.clientX, event.clientY).closest('.main__workspace__tools__items__tool');

    if ((buttonContainer[0].getElementsByClassName('active')[0] === buttons[1]) && (event.which === 1) && (menuButton === null)) {
      const buffer = getComputedStyle(document.getElementById('curr-color')).backgroundColor;

      document.getElementById('curr-color').style.backgroundColor = getComputedStyle(event.target).backgroundColor;

      document.getElementById('prev-color').style.backgroundColor = buffer;
    }
  }

  return document.body.addEventListener('mouseup', chooseColorHandler);
}

function canvasController(value) {
  const canvas = value;
  const canvasContext = canvas.getContext('2d');
  canvasContext.scale(10, 10);
  canvas.addEventListener('mousedown', () => {
    canvas.className += ' active';
    canvasContext.fillStyle = document.getElementById('curr-color').getAttribute('style').slice(18).slice(0, -1);
  });
  canvas.addEventListener('mouseup', () => {
    canvas.className = canvas.className.replace(' active', '');
  });
  canvas.addEventListener('mousemove', (event) => {
    if ((canvas.classList.contains('active')) && (buttonContainer[0].getElementsByClassName('active')[0] === buttons[0])) {
      canvasContext.fillRect(event.offsetX / 10, event.offsetY / 10, 1, 1);
    }
  });
}
function addNewElement(tagName, className, parentTag, id) {
  const newElement = document.createElement(tagName);
  newElement.className += className;
  if (arguments.length > 3) {
    newElement.id = id;
  }
  parentTag.appendChild(newElement);
  return newElement;
}
function renderLayer() {
  let parent = document.getElementsByClassName('main__workspace__layers')[0];
  const current = parent.getElementsByClassName('current')[0];
  let id;
  if (!current) {
    id = 'l1';
  } else {
    id = `l${(+(parent.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  let newElement = addNewElement('div', 'main__workspace__layers__layer_wrapper', parent, id);

  newElement.classList += ' current';
  parent = newElement;
  newElement = addNewElement('div', 'main__workspace__layers__layer', parent);
  parent = newElement;
  newElement = addNewElement('img', 'main__workspace__layers__layer__make-copy_icon', addNewElement('div', 'main__workspace__layers__layer__make-copy', parent));
  newElement.setAttribute('src', 'assets/pictures/copy-icon.svg');
  newElement.setAttribute('alt', '');
  newElement = addNewElement('img', 'main__workspace__layers__layer__delete_icon', addNewElement('div', 'main__workspace__layers__layer__delete', parent));
  newElement.setAttribute('src', 'assets/pictures/trash-icon.svg');
  newElement.setAttribute('alt', '');
}

function renderCanvas(copiedElemId) {
  const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
  const current = canvasList.getElementsByClassName('current')[0];
  let id;
  if (!current) {
    id = 'c1';
  } else {
    id = `c${(+(canvasList.lastElementChild.getAttribute('id').slice(1)) + 1).toString()}`;
    current.className = current.className.replace(' current', '');
  }
  const newElement = addNewElement('canvas', 'main__workspace__canvas', canvasList, id);
  newElement.setAttribute('width', '580');
  newElement.setAttribute('height', '580');
  newElement.classList += ' current';
  if (arguments.length) {
    const context = newElement.getContext('2d');
    context.drawImage(document.getElementById(copiedElemId), 0, 0);
  }
  canvasController(newElement);
}

function layerEventController() {
  const layersList = document.getElementsByClassName('main__workspace__layers')[0];
  document.getElementById('add-layer').addEventListener('click', () => {
    renderLayer();
    renderCanvas();
  });
  layersList.addEventListener('click', (event) => {
    const eventElement = event.target;
    const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    if (eventElement.classList.contains('main__workspace__layers__layer')) {
      const currentLayer = layersList.getElementsByClassName('current')[0];
      const currentId = currentLayer.getAttribute('id').slice(1);
      const currentCanvas = document.getElementById(`c${currentId}`);
      currentLayer.className = currentLayer.className.replace(' current', '');
      currentCanvas.className = currentCanvas.className.replace(' current', '');

      const eventId = eventElement.parentElement.getAttribute('id').slice(1);
      const nextCanvas = document.getElementById(`c${eventId}`);
      eventElement.parentElement.classList += ' current';
      nextCanvas.classList += ' current';
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__make-copy_icon')) {
      const copiedElemId = `c${event.target.parentElement.parentElement.parentElement.getAttribute('id').slice(1)}`;
      renderLayer();
      renderCanvas(copiedElemId);
    }

    if (eventElement.classList.contains('main__workspace__layers__layer__delete_icon')) {
      const deletedEl = event.target.parentElement.parentElement.parentElement;
      const elementId = deletedEl.getAttribute('id').slice(1);
      layersList.removeChild(deletedEl);
      canvas.removeChild(document.getElementById(`c${elementId}`));
    }
  });
}

function setAdditionalInterface() {
  function resetLocalStorage() {
    reset.addEventListener('click', (event) => {
      if (event.which === 1) {
        localStorage.clear();

        document.location.reload();
      }
    });
  }
  function findNextCanvas(current) {
    if ((current.nextElementSibling) && (current.nextElementSibling.classList.contains('main__workspace__canvas'))) {
      return current.nextElementSibling;
    }
    return document.getElementsByClassName('main__workspace__canvas_wrapper')[0].firstElementChild;
  }
  function runAnimation(interval) {
    const animationId = document.getElementsByClassName('footer_button_animate')[0];
    if (+animationId.getAttribute('animated') !== 0) {
      cancelAnimationFrame((+animationId.getAttribute('animated')));
      animationId.setAttribute('animated', '0');
      return;
    }
    let start = performance.now();
    const canvasList = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
    let currentCanvas = canvasList.getElementsByClassName('current')[0];
    let nextCanvas = findNextCanvas(currentCanvas);
    animationId.setAttribute('animated', requestAnimationFrame(function animate(time) {
      const timePassed = time - start;
      if (timePassed >= interval) {
        start = time;
        currentCanvas.className = currentCanvas.className.replace(' current', '');
        nextCanvas.classList += ' current';
        currentCanvas = nextCanvas;
        nextCanvas = findNextCanvas(currentCanvas);
        animationId.setAttribute('animated', requestAnimationFrame(animate));
      } else {
        animationId.setAttribute('animated', requestAnimationFrame(animate));
      }
    }));
  }
  function animateCanvas() {
    const animateButton = document.getElementsByClassName('footer_button_animate')[0];
    animateButton.addEventListener('click', () => {
      runAnimation(1000 / (+document.getElementById('fps').getAttribute('value')));
    });
  }

  function setFpsRate() {
    const fpsSlider = document.getElementById('fps');
    fpsSlider.addEventListener('input', () => {
      fpsSlider.setAttribute('value', fpsSlider.value);
    });
  }

  function runFullscreen() {
    document.getElementsByClassName('footer_button_fullscreen')[0].addEventListener('click', () => {
      const canvas = document.getElementsByClassName('main__workspace__canvas_wrapper')[0];
      const newElement = addNewElement('div', 'main__workspace__canvas_wrapper__fullscreen_button', canvas);
      newElement.innerHTML = 'Turn off fullscreen';
      newElement.addEventListener('click', () => {
        document.exitFullscreen();
        canvas.removeChild(newElement);
      });
      canvas.requestFullscreen();
    });
  }

  return (function () {
    resetLocalStorage();
    animateCanvas();
    runFullscreen();
    setFpsRate();
  }());
}


function run() {
  setActive();

  chooseColor();
  canvasController(document.getElementsByClassName('main__workspace__canvas_wrapper')[0].getElementsByClassName('current')[0]);
  layerEventController();
  setAdditionalInterface();
}


run();
