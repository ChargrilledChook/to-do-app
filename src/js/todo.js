// A single Todo / task and its data
export class Todo {
  constructor(options) {
    this.id = options.id;
    this.title = options.title;
    this.description = options.description;
    this.dueDate = options.dueDate;
    this.project = options.project;
    this.priority = options.priority;
    this.complete = options.complete;
    this.created = Date.now();
  }
}
