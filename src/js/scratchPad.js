const option1 = {
  title: "Date1",
  dueDate: "2022-05-08",
};

const option2 = {
  title: "Date1",
  dueDate: "2022-05-08",
};

const todo1 = new Todo(option1);
const todo2 = new Todo(option2);

console.log({ todo1, todo2 });

const iso = parseISO(option1.dueDate);

// const formatted = format(iso, "");
const distance = formatDistanceToNow(iso, { addSuffix: true });
console.log(distance);
