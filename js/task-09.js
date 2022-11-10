const bodyEl = document.querySelector(`body`);
const spanEl = document.querySelector(`.color`);
const buttonEl = document.querySelector(`.change-color`);

buttonEl.addEventListener("click", backgroundColorClick);

function backgroundColorClick() {
  const randomBackgroundColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomBackgroundColor;
  spanEl.textContent = randomBackgroundColor;
  buttonEl.style.backgroundColor = randomBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
