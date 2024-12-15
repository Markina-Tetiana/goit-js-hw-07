function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector('#controls');
const inputNum = control.querySelector('input');
const buttonCreate = control.querySelector('[data-create]');
const buttonDestroy = control.querySelector('[data-destroy]');
const boxesCollection = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesCollection.innerHTML = '';
  boxesCollection.append(...boxes);
}
function destroyBoxes() {
  boxesCollection.innerHTML = '';
}

buttonCreate.addEventListener('click', () => {
  const amount = parseInt(inputNum.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNum.value = '';
  } else {
    alert('Please enter a number between 1 and 100!');
  }
});

buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});
