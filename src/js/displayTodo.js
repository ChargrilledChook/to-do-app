import { formatDistanceToNow, parseISO } from "date-fns";

export class DisplayTodo {
  constructor(todo) {
    this.todo = todo;
  }

  get card() {
    return this._createCard();
  }

  _createCard() {
    const container = document.createElement("div");
    container.append(
      this._title(),
      this._description(),
      this._id(),
      this._dueDate(),
      this._deleteButton()
    );
    container.classList.add("todo-card");
    container.id = `todo#${this.todo.id}`;
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

  _id() {
    const desc = document.createElement("div");
    desc.textContent = this.todo.id;
    return desc;
  }

  _dueDate() {
    const due = document.createElement("div");
    due.textContent = this._formatDate();
    return due;
  }

  _formatDate() {
    try {
      const iso = parseISO(this.todo.dueDate);
      return formatDistanceToNow(iso, { addSuffix: true });
    } catch (error) {
      return "";
    }
  }

  _deleteButton() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    return deleteBtn;
  }
}
