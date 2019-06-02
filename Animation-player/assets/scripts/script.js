const buttonContainer = document.getElementsByClassName('main__workspace__tools__items');

const buttons = buttonContainer[0].getElementsByClassName('main__workspace__tools__items__tool');

// const canvas = document.getElementsByClassName('main__workspace__canvas');

// const canvasCells = canvas[0].getElementsByClassName('main__workspace__canvas__item');

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

function draw() {
  const canvas = document.getElementById('canvas');
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
    if (canvas.classList.contains('active')) {
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

function layerEventController() {
  const layersList = document.getElementsByClassName('main__workspace__layers')[0];
  document.getElementById('add-layer').addEventListener('click', () => {
    const newElement = addNewElement('div', 'main__workspace__layers__layer', addNewElement('li', 'main__workspace__layers__layer_wrapper', layersList));
    const current = layersList.getElementsByClassName('current')[0];
    current.className = current.className.replace(' current', '');
    newElement.classList += ' current';
  });
  layersList.addEventListener('click', (event) => {
    const layer = event.target;
    if (layer.classList.contains('main__workspace__layers__layer')) {
      const current = layersList.getElementsByClassName('current')[0];
      current.className = current.className.replace(' current', '');
      layer.classList += ' current';
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

  return (function () {
    resetLocalStorage();
  }());
}


function run() {
  setActive();

  chooseColor();
  draw();
  layerEventController();
  setAdditionalInterface();
}


run();
