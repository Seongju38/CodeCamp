const keyCodeCheck = function () {
  if (window.event.keyCode === 13) {
    const inputValue = document.querySelector("#todo-input").value;
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    console.log(inputValue, newLi, newSpan); // console.log에는 잘 뜨지만 화면에는 추가가 되지 않음
  }
};
