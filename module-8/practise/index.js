//function getCoords(elem) {
//  const box = elem.getBoundingClientRect();
//  return {
//    top: box.top + pageYOffset,
//    left: box.left + pageXOffset,
//  };
//}
//
//const ball = document.querySelector('#ball');

//ball.addEventListener('mousedown', function(e) {
//  const coords = getCoords(ball);
//  const shiftX = e.pageX - coords.left;
//  const shiftY = e.pageY - coords.top;
//
//  function moveAt(e) {
//    ball.style.left = e.pageX - shiftX + 'px';
//    ball.style.top = e.pageY - shiftY + 'px';
//  }
//  moveAt(e);
//
//  const onMouseMove = function(e) {
//    moveAt(e);
//  };
//
//  document.addEventListener('mousemove', onMouseMove);
//
//  const onMouseUp = function(e) {
//    document.removeEventListener('mousemove', onMouseMove);
//    ball.removeEventListener('mouseup', onMouseUp);
//  };
//
//  ball.addEventListener('mouseup', onMouseUp);
//});

const DATA_COLOR = 'data-color';

const colorsArray = [[255, 255, 50, 1], [255, 50, 255, 1], [0, 0, 0, 1]];

const colors = document.querySelector('#colors');
const palette = document.querySelector('#palette');
const UL = document.createElement('ul');
const generateTemplate = (color) => {
  return `<li>
              <div
                draggable="true"
                ${DATA_COLOR}="${color}" 
                style="background-color: rgba(${color});
                height: 100%;
                width: 100%">
              </div>
            </li>`;
};

UL.innerHTML = colorsArray.map(generateTemplate).join('');
colors.appendChild(UL);

palette.addEventListener('drop', function(e) {
  if (e.target.classList.contains('cell')) {
    const currentColor = e.target.getAttribute('data-color') || '255,255,255,1';
    const newColor = e.dataTransfer.getData('color');
    const currentColorArray = colorStringToArray(currentColor);
    const newColorArray = colorStringToArray(newColor);
    const blendedColor = colorBlend(currentColorArray, newColorArray);

    e.target.setAttribute('data-color', blendedColor);
    console.log(blendedColor);
    e.target.style['background-color'] = `rgba(${blendedColor})`;
  }
});

palette.addEventListener('dragover', (e) => {
  e.preventDefault();
});

colors.addEventListener('dragstart', function(e) {
  const value = e.target.getAttribute(DATA_COLOR);
  e.dataTransfer.setData('color', value);
});

const addColorButton = document.querySelector('#add-color');
addColorButton.addEventListener('click', function(e) {
  UL.insertAdjacentHTML('beforeEnd', generateTemplate(randomRGBA()));
});

function colorStringToArray(colorString) {
  return colorString.split(',');
}

function colorBlend(currentColor, newColor) {
  return currentColor.map((item, i) => {
    return Math.ceil((Number(item) + Number(newColor[i])) / 2);
  });
}

function randomRGBA() {
  const o = Math.round;
  const r = Math.random;
  const s = 255;
  return o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1);
}
