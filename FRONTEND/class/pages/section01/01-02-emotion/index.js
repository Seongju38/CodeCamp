import { MyEmail, MyEmailInput } from "../../../styles/01-02-emotion";

// 페이지 앞글자는 대문자로 쓰는 것이 일반적임
export default function EmotionPage() {
  // 여기는 자바스크립트 쓰는 곳

  return (
    <div>
      <MyEmail>이메일: </MyEmail>
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <MyEmailInput type="text" />
      <button>클릭하세요!</button>
      <img src="/next.svg" />
    </div>
  );
}
