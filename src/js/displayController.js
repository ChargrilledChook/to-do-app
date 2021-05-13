// // This doesn't work rethink approach. It needs to references to data and dom stuff.
// // Static method probably won't work without a lot of changes

// export class DisplayController {
//   constructor() {
//     this.container = document.querySelector(".todo-window");
//   }

//   static renderTodos(list) {
//     const nodes = this.container.childNodes;
//     console.log(nodes);
//     while (nodes.length > 2) {
//       this.container.removeChild(container.lastChild);
//     }
//     list.forEach((todo) =>
//       this.container.append(new DisplayTodo(todoData, todo).card)
//     );
//   }
// }
