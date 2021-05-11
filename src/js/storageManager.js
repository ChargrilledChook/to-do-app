// class StorageManager {
//   constructor() {
//     this.data = checkStorage();
//   }

//   checkStorage() {
//     if (!localStorage.getItem("todos")) {
//       const storage = {};
//     } else {
//       const storage = JSON.parse(localStorage.getItem("todos"));
//     }
//     return storage;
//   }
// }

import { DataController } from "./dataController";

export function checkStorage() {
  if (!localStorage.getItem("todoData")) return new DataController();

  const storage = JSON.parse(localStorage.getItem("todoData"));

  const { idCounter, todoList } = storage;

  return new DataController(idCounter, todoList);
}
