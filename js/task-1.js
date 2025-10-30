const liElem = document.querySelectorAll("li.item");
const liLength = liElem.length;

console.log(`Number of categories: ${liLength}`);


liElem.forEach(category => {
  const title = category.querySelector("h2.title").textContent;
  const elements = category.querySelectorAll("li.elem");

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements.length}`);
});

