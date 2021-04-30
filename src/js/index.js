import "normalize.css";
import "../styles/defaults.css";
import "../styles/main.css";
import { Todo } from "./toDo";

const test = new Todo("Groceries", "Get some groceries", "14/04/14");

console.table(test);
