const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (!inputEl.value) {
    return (nameOutputEl.textContent = "Anonymous");
  }
  nameOutputEl.textContent = inputEl.value;
});
