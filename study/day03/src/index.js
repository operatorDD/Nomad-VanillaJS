
// 課題
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.getElementsByTagName("h2")[0];

const superEventHandler = {
  mouseover: function () {
    title.innerHTML = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseout: function () {
    title.innerHTML = "The mouse is gone!";
    title.style.color = colors[1];
  },
  onresize: function () {
    title.innerHTML = "You just resized!";
    title.style.color = colors[2];
  },
  contextmenu: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = colors[4];
  }
};

window.addEventListener("resize", superEventHandler.onresize);
title.addEventListener("mouseover", superEventHandler.mouseover);
title.addEventListener("mouseout", superEventHandler.mouseout);
window.addEventListener("contextmenu", superEventHandler.contextmenu);

/*
h2.textContent = "문자열"
h2.innerText = "문자열"
h2.innerHTML = "문자열"

 - textContent: <script>と<style>要素を含む全てのコンテンツを持ってくる
 - innerText: 人が読める要素だけ処理する、画面にレンダリングされたあとの形
 - innerHTML: 名前通り、HTMLを返す。→textContentの方が早いし、XSS攻撃の心配もない
*/
