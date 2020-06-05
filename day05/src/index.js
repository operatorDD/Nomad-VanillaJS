import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  const secondsTerm = Math.floor((xmasDay - date) / 1000);

  const days = Math.floor(secondsTerm / 86400);
  const hours = Math.floor(secondsTerm / 3600) - days * 24;
  const minutes = Math.floor(secondsTerm / 60) - (days * 24 * 60 + hours * 60);
  const seconds = Math.floor(secondsTerm % 60);

  clockTitle.innerText = `${fillZero(days)}d ${fillZero(hours)}h \
                          ${fillZero(minutes)}m ${fillZero(seconds)}s`;
}

function fillZero(num) {
  return num < 10 ? `0${num}` : num;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
