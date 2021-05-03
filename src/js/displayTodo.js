export class DisplayTodo {
  constructor(todo) {
    this.todo = todo;
  }

  get card() {
    return this._createCard();
  }

  _createCard() {
    const container = document.createElement("div");
    container.append(this._title(), this._description(), this._dueDate());
    return container;
  }

  _title() {
    const title = document.createElement("h3");
    title.textContent = this.todo.title;
    return title;
  }

  _description() {
    const desc = document.createElement("div");
    desc.textContent = this.todo.description;
    return desc;
  }

  _dueDate() {
    const due = document.createElement("div");
    due.textContent = this.todo.date;
    return due;
  }
}
