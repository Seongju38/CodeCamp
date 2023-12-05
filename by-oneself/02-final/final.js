// input이 될 때마다 호출되는 것임.
// 아래 코드로 하게 되면
//  가운데에 input이 4개의 글자가 들어가 있을 경우,
//      첫번째에 input이 될 때마다 끝에 input으로 focus가 가게 됨.

// const changeFocusPhone = () => {
//   let frontPhone = document.getElementById("frontPhoneNum").value;
//   let middlePhone = document.getElementById("middlePhoneNum").value;

//   if (frontPhone.length === 3) {
//     document.getElementById("middlePhoneNum").focus();
//   } else if (middlePhone.length === 4) {
//     document.getElementById("backPhoneNum").focus();
//   }
// };

const changeFocusMiddlePhone = () => {
  let frontPhone = document.getElementById("frontPhoneNum").value;

  if (frontPhone.length === 3) {
    document.getElementById("middlePhoneNum").focus();
  }
};

const changeFocusBackPhone = () => {
  let middlePhone = document.getElementById("middlePhoneNum").value;

  if (middlePhone.length === 4) {
    document.getElementById("backPhoneNum").focus();
  }
};

const changeAbleSendBtn = () => {
  let backPhone = document.getElementById("backPhoneNum").value;
  const sendBtnStatus = document.getElementById("sendCertiNumBtn");
  const signUpBtnStatus = document.getElementById("signUpBtn");

  signUpBtnStatus.disabled = true;
  signUpBtnStatus.style.border = "1px solid #D2D2D2";
  signUpBtnStatus.style.color = "#BFBFBF";

  if (backPhone.length === 4) {
    sendBtnStatus.disabled = false;
    sendBtnStatus.style.color = "#0068FF";
    sendBtnStatus.style.cursor = "pointer";
  } else {
    sendBtnStatus.disabled = true;
    sendBtnStatus.style.color = "#BFBFBF";
    sendBtnStatus.style.cursor = "default";
  }
};

let isCompleted = false;

const clickSendCertiNumBtn = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("certiNum").innerText = token;

  const sendBtnStatus = document.getElementById("sendCertiNumBtn");
  const checkBtnStatus = document.getElementById("checkCertiNumBtn");
  const signUpBtnStatus = document.getElementById("signUpBtn");

  let time = 3;
  let timer = setInterval(function () {
    if (time >= 0) {
      checkBtnStatus.disabled = false;
      checkBtnStatus.style.background = "#0068FF";
      checkBtnStatus.style.color = "#FFFFFF";
      checkBtnStatus.style.cursor = "pointer";

      let min = Math.floor(time / 60);
      let sec = String(time % 60).padStart(2, "0");
      document.getElementById("timer").innerText = `${min}:${sec}`;

      if (!isCompleted) {
        time -= 1;
      } else {
        clearInterval(timer);
        sendBtnStatus.disabled = true;
        sendBtnStatus.style.color = "#BFBFBF";
        sendBtnStatus.style.cursor = "default";

        checkBtnStatus.disabled = true;
        checkBtnStatus.innerText = "인증완료";
        checkBtnStatus.style.background = "#FAFAFA";
        checkBtnStatus.style.color = "#BFBFBF";
        checkBtnStatus.style.cursor = "default";

        signUpBtnStatus.disabled = false;
        signUpBtnStatus.style.color = "#0068FF";
        signUpBtnStatus.style.border = "1px solid #0068FF";

        isCompleted = false;
      }
    } else {
      sendBtnStatus.disabled = true;
      sendBtnStatus.style.color = "#BFBFBF";
      sendBtnStatus.style.cursor = "default";

      checkBtnStatus.disabled = true;
      checkBtnStatus.style.background = "#FAFAFA";
      checkBtnStatus.style.color = "#BFBFBF";
      checkBtnStatus.style.cursor = "default";

      document.getElementById("certiNum").innerText = "000000";
      document.getElementById("timer").innerText = "3:00";

      clearInterval(timer);
    }
  }, 1000);
};

const clickCheckCertiNumBtn = () => {
  const timerText = document.getElementById("timer").innerText;
  //   let min = Number(timerText.split(":")[0]);
  //   let sec = Number(timerText.split(":")[1]);
  //   let time = min * 60 + sec;

  //   if (time > 0) {
  if (timerText !== "0:00") {
    alert("인증이 완료되었습니다.");
    isCompleted = true;
  }
};

const clickSignUpBtn = () => {
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let checkPassword = document.getElementById("checkPassword").value;
  let noChoiceRegion = document.getElementById("region").value; // 지역을 선택하세요.
  let noChoiceGender =
    document.getElementsByName("gender")[0].checked ||
    document.getElementsByName("gender")[1].checked; // false

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").style.visibility = "visible";
  } else {
    document.getElementById("emailError").style.visibility = "hidden";
  }

  if (name === "") {
    document.getElementById("nameError").style.visibility = "visible";
  } else {
    document.getElementById("nameError").style.visibility = "hidden";
  }

  if (password === "" || password !== checkPassword) {
    document.getElementById("passwordError").style.visibility = "visible";
  } else {
    document.getElementById("passwordError").style.visibility = "hidden";
  }

  if (checkPassword === "" || password !== checkPassword) {
    document.getElementById("checkPasswordError").style.visibility = "visible";
  } else {
    document.getElementById("checkPasswordError").style.visibility = "hidden";
  }

  if (noChoiceRegion === "지역을 선택하세요.") {
    document.getElementById("choiceRegionError").style.visibility = "visible";
  } else {
    document.getElementById("choiceRegionError").style.visibility = "hidden";
  }

  if (!noChoiceGender) {
    document.getElementById("choiceGenderError").style.visibility = "visible";
  } else {
    document.getElementById("choiceGenderError").style.visibility = "hidden";
  }

  if (
    email !== "" &&
    email.includes("@") &&
    name !== "" &&
    password !== "" &&
    checkPassword !== "" &&
    password === checkPassword &&
    noChoiceRegion !== "지역을 선택해 주세요." &&
    noChoiceGender
  ) {
    alert("코드캠프 가입을 축하합니다.");
  }
};
