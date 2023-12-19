const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function () {
  const messageContainer = document.querySelector("#d-day-message");
  messageContainer.textContent = "D-Day를 입력해 주세요.";

  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
  } else if (isNaN(remaining)) {
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
  }

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor((remaining / 3600) % 24);
  const remainingMin = Math.floor((remaining / 60) % 60);
  const remainingSec = Math.floor(remaining % 60);

  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
