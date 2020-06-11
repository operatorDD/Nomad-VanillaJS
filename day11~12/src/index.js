// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

let hidingNum = 0;
let lastestInputNum = "";
let viewingNum = "";

let operator = "";

const postSpan = document.querySelector("span");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const cancelBtn = document.querySelector(".cancel");

function paintClickedNum(event) {
  if (viewingNum.length < 1 && event.target.value === "0") {
    return;
  } else {
    viewingNum += event.target.value;
    lastestInputNum = viewingNum;
    postSpan.innerText = viewingNum;
  }
}

function setOperator(event) {
  const inputOperator = event.target.value;
  if (inputOperator === "=") {
    calcResult();
  } else {
    hidingNum = viewingNum;
    viewingNum = "";
    operator = inputOperator;
  }
}

function calcResult() {
  const parsedLastInputNum = parseInt(lastestInputNum);
  const parsedHidingNum = parseInt(hidingNum);

  if (operator === "+") {
    viewingNum = parsedLastInputNum + parsedHidingNum;
  } else if (operator === "-") {
    viewingNum = parsedLastInputNum - parsedHidingNum;
  } else if (operator === "*") {
    viewingNum = parsedLastInputNum * parsedHidingNum;
  } else {
    viewingNum = parseFloat(parsedLastInputNum) / parsedHidingNum;
  }
  console.log("calc result = " + viewingNum);
  hidingNum = viewingNum;
  postSpan.innerText = viewingNum;
}

function resetAll() {
  console.log("insert c");
  hidingNum = "0";
  viewingNum = "";
  operator = "";
  postSpan.innerText = 0;
}

function addEventToBtns(btns, functionName) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", functionName);
  }
}

addEventToBtns(numBtns, paintClickedNum);
addEventToBtns(operatorBtns, setOperator);
addEventToBtns([cancelBtn], resetAll);
