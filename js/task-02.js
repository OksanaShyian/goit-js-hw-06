const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const arrayItemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = `${ingredient}`;
  return item;
});

ingredientsEl.append(...arrayItemsEl);

console.log(arrayItemsEl);
