let text = document.getElementById("text");
let firstNumber = "";
let secondNumber = "";
let operator = "";
let resetScreen = false;

function getInput(value) {
  if (text.value === "0" || resetScreen) {
    text.value = value;
    resetScreen = false;
  } else {
    text.value += value;
  }
}

function setOperator(op) {
  firstNumber = text.value;
  operator = op;
  resetScreen = true;
}

function calculate() {
  if (firstNumber !== "" && operator !== "") {
    secondNumber = text.value;
    let result = eval(`${firstNumber} ${operator} ${secondNumber}`);
    text.value = result;
    firstNumber = "";
    secondNumber = "";
    operator = "";
    resetScreen = true;
  }
}

function clearInput() {
  text.value = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  resetScreen = false;
}
