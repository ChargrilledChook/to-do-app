import "normalize.css";
import "../styles/defaults.css";
import "../styles/main.css";
import { checkStorage } from "./storageManager.js";
import { Todo } from "./todo.js";
import { DataController } from "./dataController.js"; // May be redundant if it's coming from the storage manager
import { DisplayTodo } from "./displayTodo.js";
import { check } from "prettier";

const todoWindow = document.querySelector(".todo-window");
// This is no good. temp for now
const todoBox = todoWindow.querySelector(".todo-container");

const todoData = checkStorage();
renderTodos(todoBox, todoData.todoList);

// Add Todo Button
const addButton = document.querySelector(".add-todo");
addButton.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  if (modal.style.display === "grid") {
    modal.style.display = "none";
  } else {
    modal.style.display = "grid";
  }
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  const title = document.querySelector("input[name='name']").value;
  const description = document.querySelector("input[name='description']").value;
  const due = document.querySelector("input[name='due-date']").value;

  const todo = { title, description, due };
  addTodoToDom(todo);
  console.log(todo);

  localStorage.setItem("todoData", JSON.stringify(todoData));
  renderTodos(todoBox, todoData.todoList);
});

function addTodoToDom(data) {
  const todo = todoData.addTodo(data);
}

function renderTodos(container, list) {
  container.innerHTML = "";
  list.forEach((todo) => container.append(new DisplayTodo(todo).card));
}

localStorage.setItem("todoData", JSON.stringify(todoData));
