// const box = document.getElementById("boxes");

// function createBoxes(amount) {
//   const basicSize = 30;
//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i++) {
//     const size = basicSize + i * 10;
//     const div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   box.textContent = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }
// createBoxes(5);

const Elements = {
  controleEl: document.querySelector("#controls"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  boxEl: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Elements.createEl.addEventListener("click", createBoxes);

function createBoxes() {
  let amount = Elements.controleEl.firstElementChild.value;

  let elementsString = "";

  for (let i = 1; i <= amount; i += 1) {
    let createSize = (i + 2) * 10;

    let elementString = `<div style="
    width:${createSize}px;
    height: ${createSize}px; 
    background-color: ${getRandomHexColor()};"></div>`;

    elementsString += elementString;
  }
  Elements.boxEl.innerHTML += elementsString;
}

Elements.destroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  Elements.controleEl.firstElementChild.value = "";
  Elements.boxEl.textContent = "";
}
