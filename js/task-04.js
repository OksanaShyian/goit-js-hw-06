const counter = {
  incrementBtn: document.querySelector("[data-action='increment']"),
  decrementBtn: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
counter.incrementBtn.addEventListener("click", increment);
counter.decrementBtn.addEventListener("click", decrement);
