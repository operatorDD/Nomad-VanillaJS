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


