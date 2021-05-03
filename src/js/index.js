import "normalize.css";
import "../styles/defaults.css";
import "../styles/main.css";
import { Todo } from "./toDo";
import { DisplayTodo } from "./displayTodo";

const test = new Todo("Groceries", "Get some groceries", "14/04/14");

console.table(test);

const main = document.querySelector(".main");

const todoHTML = new DisplayTodo(test);
main.append(todoHTML.card);

// Add Todo Button
const addButton = document.querySelector(".add-todo");
addButton.addEventListener("click", () => {
  console.log("Clicky");
});
