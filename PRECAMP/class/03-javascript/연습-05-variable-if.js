// 데이터 타입, 연산자 실습

1 + 1;
//2

1 + "만원";
//"1만원"

1 + "1";
//"11"

1 - "1";
//0

"코드" + "캠프";
//"코드캠프"

"123" == 123;
//true

"123" === 123;
//false

true && true;
//true

true && false;
//false

false || true;
//true

!false;
//true

!true;
//false

// 조건문 실습 1

if (1 + 1 === 2) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
//VM52:2 정답입니다
//undefined

if (true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
//VM59:2 정답입니다
//undefined

if (!true) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
//VM62:4 틀렸습니다
//undefined

if (0) {
  console.log("정답입니다");
} else {
  console.log("틀렸습니다");
}
//VM69:4 틀렸습니다
//undefined

// 조건문 실습 2

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};
//undefined

if (profile.age >= 20) {
  console.log("성인입니다");
} else if (8 <= profile.age && profile.age <= 19) {
  // 보통은 profile.age <= 19 && profile.age >= 8 비교되는 대상이 앞으로 올 수 있도록 함
  // 코드 최적화 (불필요한 코드는 삭제) 해주는 습관 기르기
  // 위의 if에서 20이상을 날려주었기 때문에 19이하 조건은 필요없음
  // (profile.age >= 8)
  console.log("학생입니다");
} //else {
else if (profile.age > 0) {
  // User가 잘 못 입력하는 경우도 생각해야함
  // else가 아닌 else if(profile.age > 0)
  console.log("어린이입니다");
} else {
  console.log("잘못 입력하셨습니다");
}
//VM652:4 학생입니다
//undefined
