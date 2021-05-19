import { DataController } from "./dataController.js";

export function checkStorage() {
  if (!localStorage.getItem("todoData")) return new DataController();

  const storage = JSON.parse(localStorage.getItem("todoData"));

  const { idCounter, todoList, projects } = storage;

  return new DataController(idCounter, todoList, projects);
}
