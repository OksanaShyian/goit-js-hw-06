const bodyEl = document.querySelector(`body`);
const spanEl = document.querySelector(`.color`);
const buttonEl = document.querySelector(`.change-color`);

buttonEl.addEventListener("click", backgroundColorClick);

function backgroundColorClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
  buttonEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
