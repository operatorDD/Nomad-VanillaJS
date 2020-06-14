// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const postSpan = document.querySelector("span");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const cancelBtn = document.querySelector(".cancel");

const onlyNum = /^[0-9]+$/;
let firstValue = [];
let secondValue = [];
let addedOperator = "";
let calcEndwithEquals = false;

function insertNum(value) {
  firstValue = calcEndwithEquals ? [] : firstValue;
  calcEndwithEquals = false;

  if (addedOperator === "") {
    firstValue.push(value);
    postSpan.innerText = firstValue.join("");
  } else {
    secondValue.push(value);
    postSpan.innerText = secondValue.join("");
  }
}

function callOperator(operator) {
  if (addedOperator !== "" && operator === "=") {
    const result = calcResult();
    postSpan.innerText = result;
    firstValue = Array.from(String(result));
    secondValue = [];
    addedOperator = "";
    calcEndwithEquals = true;
  } else if (addedOperator !== "" && secondValue.length > 0) {
    const result = calcResult();
    postSpan.innerText = result;
    firstValue = Array.from(String(result));
    secondValue = [];
    addedOperator = operator;
  } else {
    addedOperator = operator === "=" ? "" : operator;
  }
}

function calcResult() {
  const firstNum = parseInt(firstValue.join(""));
  const secondNum = parseInt(secondValue.join(""));

  if (addedOperator === "+") {
    return firstNum + secondNum;
  } else if (addedOperator === "-") {
    return firstNum - secondNum;
  } else if (addedOperator === "*") {
    return firstNum * secondNum;
  } else {
    return firstNum / parseFloat(secondNum);
  }
}

function insertBtnValue(event) {
  const inputValue = event.target.value;

  if (onlyNum.test(inputValue)) {
    insertNum(inputValue);
  } else {
    callOperator(inputValue);
  }
}

function cancelCalc() {
  postSpan.innerText = 0;
  firstValue = [];
  secondValue = [];
  addedOperator = "";
}

function addEventToBtns(btns, functionName) {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", functionName);
  }
}

addEventToBtns(numBtns, insertBtnValue);
addEventToBtns(operatorBtns, insertBtnValue);
addEventToBtns([cancelBtn], cancelCalc);
