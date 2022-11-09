const inputEl = document.querySelector("#validation-input");
const numberOfCharacters = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(elem) {
  if (elem.currentTarget.value.length === numberOfCharacters) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
