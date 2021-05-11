class DataController {
  constructor() {
    this.todoList = checkStorage(); // Temp / conceptual
    this.idCounter = 0;
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

  deleteTodo(id) {
    const index = this.todoList.findIndex((entry) => entry.id === id);
    data.splice(index, 1);
    return todoList;
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
