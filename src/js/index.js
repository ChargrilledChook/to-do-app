import "normalize.css";
import "../styles/defaults.css";
import "../styles/main.css";
import { checkStorage } from "./storageManager.js";
import { Todo } from "./todo.js";
import { DataController } from "./dataController.js"; // May be redundant if it's coming from the storage manager
import { DisplayTodo } from "./displayTodo.js";
import { format, formatDistanceToNow, parseISO } from "date-fns";

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
submitButton.addEventListener("click", formHandler);

const cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", modalClear);

function formHandler() {
  const title = document.querySelector("input[name='name']").value;
  const description = document.querySelector("input[name='description']").value;
  const dueDate = document.querySelector("input[name='due-date']").value;

  const todo = { title, description, dueDate };
  addTodoToDom(todo);
  console.log(todo);

  localStorage.setItem("todoData", JSON.stringify(todoData));
  renderTodos(todoBox, todoData.todoList);
  modalClear();
}

function modalClear() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
  modal.reset();
}

function addTodoToDom(data) {
  const todo = todoData.addTodo(data);
}

function renderTodos(container, list) {
  const nodes = container.childNodes;
  console.log(nodes);
  while (nodes.length > 2) {
    container.removeChild(container.lastChild);
  }
  const todos = list.map((todo) => new DisplayTodo(todo).card);
  todos.forEach((todo) => {
    const deleteBtn = todo.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      const id = Number(todo.id.split("#")[1]);
      console.log(id);
      todoData.deleteTodo(id);
      renderTodos(container, list);
    });
  });
  todos.forEach((todo) => container.append(todo));
  localStorage.setItem("todoData", JSON.stringify(todoData));
}

// I think this can be safely deleted but leaving for now in case
// localStorage.setItem("todoData", JSON.stringify(todoData));
