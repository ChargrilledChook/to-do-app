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
  const modal = document.querySelector('.modal')
  if(modal.style.display === 'grid') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'grid'
  }
});

const submitButton = document.querySelector("#submit")
submitButton.addEventListener('click', ()=> {
  const name = document.querySelector("input[name='name']").value
  const description = document.querySelector("input[name='description']").value
  const due =  document.querySelector("input[name='due-date']").value

  const todo = new Todo(name, description, due)
  const todoCard = new DisplayTodo(todo)
  main.append(todoCard.card);
})
