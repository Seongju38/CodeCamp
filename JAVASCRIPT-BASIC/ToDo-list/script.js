const todoInput = document.querySelector("#todo-input");

const createTodo = function () {
  const todoList = document.querySelector("#todo-list");
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");

  newSpan.textContent = todoInput.value;
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};
