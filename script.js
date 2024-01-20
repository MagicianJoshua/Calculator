const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
let memoryArray = [];

const Memory = (symbol) => {
  //This switch statement handles what happens to the inputs from the calculator
  switch (symbol) {
    case "Clear":
      memoryArray = [];
      break;
    case "backspace":
      memoryArray.pop();
      break;
    case "=":
      let string = eval(memoryArray.join(""));
      memoryArray = [string];
      break;
    default:
      memoryArray.push(symbol);
  }

  Render(memoryArray);
};

const Render = (string) => {
  display.textContent = string.join("");
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    Memory(numbers[i].id);
  });
}

// we need an array to store the and display the calculation we are doing
