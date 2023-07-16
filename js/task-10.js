function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  let boxSize = 30;
  const boxArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxArray.push(box);
    
    boxSize += 10;
  }
  boxesContainer.append(...boxArray);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);
  
  if (!isNaN(amount) && amount > 0) {
    createBoxes(amount);
  } else {
    alert("Введіть будь-ласка допустиме число більше нуля!");
  }
});

destroyButton.addEventListener("click", destroyBoxes);
