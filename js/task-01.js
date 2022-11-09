const categoriesRef = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesRef.length);

categoriesRef.forEach((elem) => {
  console.log("Category:", elem.firstElementChild.textContent);
  console.log("Elements:", elem.lastElementChild.children.length);
});
