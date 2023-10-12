let container = document.querySelector(".container");
let hexChar = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let hexCode;

function createDivElement() {
  for (let i = 0; i < 32; i++) {
    let div1 = document.createElement("div");
    div1.classList.add("colorContainer");
    let colorCode = createRandomColor();
    div1.style.backgroundColor = colorCode;
    div1.innerHTML = colorCode;
    container.appendChild(div1);
  }
}

function createRandomColor() {
  hexCode = "";
  for (let i = 0; i < 6; i++) {
    hexCode += hexChar[Math.floor(Math.random() * hexChar.length)];
  }
  return "#" + hexCode;
}
createDivElement();
