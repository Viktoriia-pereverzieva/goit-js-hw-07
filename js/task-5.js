function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const click = document.querySelector(".change-color");
const span = document.querySelector(".color");

click.addEventListener("click", () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  span.textContent = random;
});