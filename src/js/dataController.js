import { Todo } from "./todo";

export class DataController {
  constructor(idCounter = 0, todoList = []) {
    this.idCounter = idCounter;
    this.todoList = todoList;
  }

  get projects() {
    return this._listProjects();
  }

  addTodo(options) {
    options.id = this.idCounter;
    const todo = new Todo(options);
    this.idCounter++;
    this.todoList.push(todo);
    return this;
  }

  listByProject(project) {
    return this.todoList.filter((entry) => entry.project === project);
  }

  // Might need some error handling? if it returns -1 abort etc
  deleteTodo(id) {
    const index = this.todoList.findIndex((entry) => entry.id === id);
    this.todoList.splice(index, 1);
    return this.todoList;
  }

  // compareFN snippet adapted from https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
  sortBy(prop) {
    return this.todoList.sort((a, b) =>
      a[prop] > b[prop] ? 1 : b[prop] > a[prop] ? -1 : 0
    );
  }

  // Private ==================

  _listProjects() {
    const result = this.todoList.reduce((acc, entry) => {
      acc.push(entry.project);
      return acc;
    }, []);
    return new Set([...result]);
  }
}
