const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(element) {
  let color = randColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = "rgb(25, 25, 25)";
    element.style.boxShadow = `0 0 0 2px black`;
  }, 1000);
}

function randColor() {
  const numbOne = Math.floor(Math.random() * 254);
  const numbTwo = Math.floor(Math.random() * 255);
  const numbTree = Math.floor(Math.random() * 255);

  return `rgb(${numbOne},${numbTwo},${numbTree})`;
}
