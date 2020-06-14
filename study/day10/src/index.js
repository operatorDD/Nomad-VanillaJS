// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const MAX_NUM = "maxNum";
let maxNum = 10;

function saveNumber(key, num) {
  maxNum = num;
  localStorage.setItem(key, num);
}

function paintBetweenNum() {
  const rangeForm = document.querySelector("#js-range-form");
  const rangeSpan = rangeForm.querySelector("span");
  const numRange = rangeForm.querySelector("input");
  maxNum = numRange.value;

  rangeSpan.innerText = maxNum;
  saveNumber(MAX_NUM, maxNum);
}

function paintQuestion() {
  const maxNumInStorg = localStorage.getItem(MAX_NUM);
  const numRange = document.querySelector("input");

  maxNum = maxNumInStorg === null ? maxNum : maxNumInStorg;
  numRange.addEventListener("input", paintBetweenNum);
  paintBetweenNum();
}

window.paintResult = event => {
  const answerForm = event.target.parentNode;

  const inputNum = answerForm.querySelector("#num-input").value;
  const resultForm = document.querySelector("#js-result");
  const resultP = resultForm.querySelector("#num-result");
  const winOrLoseP = resultForm.querySelector("#num-win-or-lose");
  console.log("m" + maxNum);
  const randomNum = Math.floor(Math.random() * (parseInt(maxNum) + 1));

  console.log("r" + randomNum);
  const resultText =
    parseInt(inputNum) === randomNum ? "You Win!" : "You lost!";

  resultP.innerText = `You chose: ${inputNum}, machine chose: ${randomNum}`;
  winOrLoseP.innerText = resultText;
};

function init() {
  paintQuestion();
}

init();
