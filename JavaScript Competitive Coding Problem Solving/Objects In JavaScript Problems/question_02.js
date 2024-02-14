// You want to create a simple todo list application. Each todo item needs to have a description and a status (e.g., completed or not completed). How would you represent this using objects?

let tasks = {
  task_1: {
    task: "Assignment 01 of JS",
    status: "Completed",
  },
  task_2: {
    task: "Complete JS Objects topic",
    status: "Not Completed",
  },
  task_3: {
    task: "Take a Bath",
    status: "Completed",
  },
  task_4: {
    task: "Buy Oranges",
    status: "Not Completed",
  },
  task_5: {
    task: "Buy Mangoes",
    status: "Not Completed",
  },
};

for (var task_key in tasks) {
  console.log(tasks[task_key].task, " - Status : ", tasks[task_key].status);
}
