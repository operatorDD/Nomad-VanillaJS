import "./styles.css";

const body = document.querySelector("body");
const UNDER_600_CLASS = "under_600";
const OVER_600_CLASS = "over_600";
const OVER_800_CLASS = "over_800";

function handlerResize() {
  const windowSize = window.innerWidth;

  if (windowSize >= 800) {
    body.className = OVER_800_CLASS;
  } else if (windowSize >= 600) {
    body.className = OVER_600_CLASS;
  } else {
    body.className = UNDER_600_CLASS;
  }
}

/*
HTMLレンダリング順序
https://qiita.com/mikimhk/items/7cfbd6c94d0f3d7aa51f
https://jeong-pro.tistory.com/90
 */

function init() {
  window.addEventListener("DOMContentLoaded", handlerResize());
}

init();

window.addEventListener("resize", handlerResize);
