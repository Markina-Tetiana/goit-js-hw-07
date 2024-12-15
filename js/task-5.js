function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const buttonClick = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

buttonClick.addEventListener('click', () => {
  const colorRandom = getRandomHexColor();
  body.style.backgroundColor = colorRandom;
  colorSpan.textContent = colorRandom;
});
