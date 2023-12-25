const keyCodeCheck = function () {
  if (window.event.keyCode === 13) {
    const todoList = document.querySelector("#todo-list");
    const inputValue = document.querySelector("#todo-input").value;
    const newLi = document.createElement("li"); // DOM Element의 구조 생성
    const newSpan = document.createElement("span");

    newSpan.textContent = inputValue; // span 태그 안에 값 넣기
    newLi.appendChild(newSpan); // li 태그 안의 하위 태그로 span 추가
    todoList.appendChild(newLi); // ul 태그 안의 하위 태그로 li 추가
  }
};
