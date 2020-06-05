// 2.1 Your First Function ~ 2.1.1 More Function Fun

function sayHello(name, age) {
  return `Hello ${name}! you are ${age} years old`
}

console.log(sayHello("Duho Kim", 25));


const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  minus: function (a, b) {
    return a - b;
  },
  power: function (a, b) {
    return a ** b;
  }
};
console.log(calculator.plus(1, 5)); // 6
console.log(calculator.multiply(1, 5)); // 5
console.log(calculator.divide(1, 5)); // 0.2
console.log(calculator.minus(1, 5)); // -4
console.log(calculator.power(3, 5)); // 243


// 2.2 JS DOM Functions
console.log(document) // html document

const title = document.getElementById("title");
// <h1 id="title">Hello!</h1>

title.innerHTML = 'Hi!'
// <h1 id="title">Hi!</h1>


// 2.3 Modifying the DOM with JS
console.dir(title)
// html情報、 イベント、 styleなどが入ってる

title.style.color = "red";
//文字が赤色に変わる

document.title = "I own you now"
//タイトル変更

document.querySelector("#title");
// #: idで探す
// .: classで探す


// 2.4 Events and event handlers

function handleResize(event) {
  console.log(event);
  // type: resize, target: Window などevent情報が入ってる

  console.log("I have been resized");
}
window.addEventListener("resize", handleResize());
// Function名() = すぐ呼びます。
// Function名 = すぐ呼びません。

function handleClick() {
  title.innerHTML = 'you click title!';
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);


// 2.5 if, else, and, or

// && : and, || : or
if (condition) {
  'trueの場合';
} else {
  'falseの場合';
}

if (condition) {
  'conditionがtrue';
} else　if(condition2) {
  'conditionがfalse && condition2がtrue';
} else {
  'condtionがfalse && condition2がfalse'
}

// prompt -> very very old. do not use it


// 2.6 DOM - if else - Function practice

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    console.log(currentColor);
    title.style.color = OTHER_COLOR;
  } else {
    console.log(currentColor);
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
}

init();

function handleOffline() {
  console.log("じゃねー　");
}

function handleOnline() {
  console.log("おはよう");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


// 2.7 DOM - if else - Function practive part Two

import "./styles.css";

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  // const currentClass = title.className;
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}

// toggle = 引数で私たクラスが存在すればremove, なければadd
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();

/*
HTMLレンダリング順序
https://qiita.com/mikimhk/items/7cfbd6c94d0f3d7aa51f
https://jeong-pro.tistory.com/90
 */


 
// 3.1 Making a JS Clock part One

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const mintues = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${mintues}:${seconds}`
}

function init() {
  getTime()
}

init();

// ↑↑↑↑↑↑↑↑↑↑↑↑↑再描画しないと更新されない




// 3.2 Making a JS Clock part Two

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const mintues = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${mintues < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function formatNumber(number) {
  if (number < 10) {
    return `0${number}`;
  } else {
    return number
  }
}

function init() {
  getTime();
  setInterval(gemTime, 1000); // 1秒
}

init();


