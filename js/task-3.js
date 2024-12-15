const userInput = document.querySelector('#name-input');
const userOutput = document.querySelector('#name-output');

userInput.addEventListener('input', event => {
  const trimValue = event.currentTarget.value.trim();
  userOutput.textContent = trimValue || 'Anonymous';
});
