// A single Todo / task and its data
export class Todo {
  constructor(options) {
    this.id = options.id;
    this.title = options.title;
    this.description = options.description;
    this.date = options.date;
    this.project = options.project;
    this.priority = options.priority;
    this.created = Date.now();
  }
}
