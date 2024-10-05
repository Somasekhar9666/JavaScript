const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
let todos = [];

addTodoButton.addEventListener("click", () => {
  const todo = todoInput.value.trim();
  if (todo) {
    todos.push(todo);
    todoList.insertAdjacentHTML("beforeend", `<li>${todo}</li>`);
    todoInput.value = ""; // Clear input
  }
});
