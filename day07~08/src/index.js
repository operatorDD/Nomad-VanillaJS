// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const toDoForm = document.querySelector(".js-todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoPendingList = document.querySelector(".js-todo-pending-list");
const toDoFinishedList = document.querySelector(".js-todo-finish-list");
const PENDING_TODOS = "pending";
const FINISHED_TODOS = "finished";

let pendingToDos = [];
let finishedToDos = [];

function deletePendingToDo(event) {
  const li = event.target.parentNode;
  toDoPendingList.removeChild(li);
  const cleanToDos = pendingToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  pendingToDos = cleanToDos;
  updatePendingToDos();
}

function deleteFinishedToDo(event) {
  const li = event.target.parentNode;
  toDoFinishedList.removeChild(li);
  const cleanToDos = finishedToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  finishedToDos = cleanToDos;
  updateFinishedToDos();
}

function finishedToDo(event) {
  deletePendingToDo(event);
  const li = event.target.parentNode;
  const delBtn = li.querySelector("#delete_button");
  const backBtn = li.querySelector("#finish_button");
  const span = li.querySelector("span");
  const newId = Math.random()
    .toString(36)
    .substr(2, 9);

  backBtn.innerText = "⏪";
  delBtn.removeEventListener("click", deletePendingToDo);
  backBtn.removeEventListener("click", finishedToDo);
  delBtn.addEventListener("click", deleteFinishedToDo);
  backBtn.addEventListener("click", backToPending);

  toDoFinishedList.appendChild(li);
  const toDoObj = {
    text: span.innerText,
    id: newId
  };
  li.id = newId;
  finishedToDos.push(toDoObj);
  updateFinishedToDos();
}

function backToPending(event) {
  deleteFinishedToDo(event);
  const li = event.target.parentNode;
  const text = li.querySelector("span").innerText;
  paintPendingToDo(text);
}

function updateFinishedToDos() {
  localStorage.setItem(FINISHED_TODOS, JSON.stringify(finishedToDos));
}

function updatePendingToDos() {
  localStorage.setItem(PENDING_TODOS, JSON.stringify(pendingToDos));
}

function paintPendingToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finishedBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.random()
    .toString(36)
    .substr(2, 9);

  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishedBtn);
  span.innerText = text;
  delBtn.innerText = "❌";
  finishedBtn.innerText = "✅";
  delBtn.addEventListener("click", deletePendingToDo);
  finishedBtn.addEventListener("click", finishedToDo);

  li.id = newId;
  delBtn.id = "delete_button";
  finishedBtn.id = "finish_button";
  toDoPendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pendingToDos.push(toDoObj);
  updatePendingToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(PENDING_TODOS);
  console.log(loadedToDos);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintPendingToDo(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPendingToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
