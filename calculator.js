let left_operand = "";
let right_operand = "";
let calculation = "";
let operator = "";

function handleClick(keyPressed, keyType) {
  if (keyType === "NUMBER") {
    if (operator === "") {
      left_operand += keyPressed;
    } else {
      right_operand += keyPressed;
    }
    document.getElementById("calculateField").value += keyPressed;
  } else if (keyType === "OPERATOR") {
    operator = keyPressed;
    document.getElementById("calculateField").value += keyPressed;
  } else if (keyType === "RESULT") {
    console.log(left_operand + " " + operator + " " + right_operand);
    calculateResult();
    // showmyHistory();
  } else if (keyType === "CLEAR") {
    clearOperands();
    document.getElementById("calculateField").value = "";
    //document.getElementById("history").innerText = "";
  }
}

function clearOperands() {
  left_operand = "";
  right_operand = "";
  operator = "";
}

function calculateResult() {
  switch (operator) {
    case "+":
      calculation = Number(left_operand) + Number(right_operand);
      break;
    case "-":
      calculation = Number(left_operand) - Number(right_operand);
      break;
    case "/":
      calculation = Number(left_operand) / Number(right_operand);

      break;
    case "X":
      calculation = Number(left_operand) * Number(right_operand);
      break;
    default:
      break;
  }
  document.getElementById("calculateField").value = calculation; //Number(calculation).toFixed(
  //4
  //);
  showmyHistory();
  clearOperands();
  left_operand = calculation;
}

function showmyHistory() {
  document.getElementById("history").innerText +=
    String(left_operand) +
    String(operator) +
    String(right_operand) +
    "=" +
    String(calculation) +
    "\n";
}
