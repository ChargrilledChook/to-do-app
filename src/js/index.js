import "normalize.css";
import "../styles/defaults.css";
import "../styles/main.css";
import { checkStorage } from "./storageManager.js";
import { Todo } from "./todo.js";
import { DataController } from "./dataController.js"; // May be redundant if it's coming from the storage manager
import { DisplayTodo } from "./displayTodo.js";

console.log(JSON.parse(localStorage.todoData));

const test = new Todo({
  title: "Groceries",
  description: "Get some groceries",
  due: "14/04/14",
});

console.table(test);

const main = document.querySelector(".main");

const todoHTML = new DisplayTodo(test);
main.append(todoHTML.card);

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
  const name = document.querySelector("input[name='name']").value;
  const description = document.querySelector("input[name='description']").value;
  const due = document.querySelector("input[name='due-date']").value;

  const todo = new Todo(name, description, due);
  const todoCard = new DisplayTodo(todo);
  main.append(todoCard.card);
});

const data = checkStorage();

data.addTodo({ title: "Milk", project: "Broceries", priority: 1 });

console.log(data);

function renderTodos(list) {
  list.forEach((todo) => main.append(new DisplayTodo(todo).card));
}

renderTodos(data.todoList);

localStorage.setItem("todoData", JSON.stringify(data));
