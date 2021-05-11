import { it } from "date-fns/locale";
import { DataController } from "../js/dataController.js";

const controller = new DataController();

const testObjs = [
  { title: "first", project: "red", priority: 3 },
  { title: "second", project: "blue", priority: 3 },
  { title: "third", project: "red", priority: 1 },
  { title: "fourth", project: "green", priority: 2 },
  { title: "fifth", project: "blue", priority: 4 },
];

testObjs.forEach((obj) => controller.addTodo(obj));

describe("delete todo", () => {
  test("correctly deletes a todo from the middle", () => {
    expect(controller.deleteTodo(2));
  });
});
