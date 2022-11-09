const inputRef = document.querySelector(`#font-size-control`);
const spanRef = document.querySelector(`#text`);

inputRef.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}
