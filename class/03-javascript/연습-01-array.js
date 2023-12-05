let classmates = ["철수", "영희", "훈이"];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0];
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.includes("훈이");
// true
classmates.includes("맹구");
// false
classmates.length;
// 3
classmates.push("맹구");
// 4
classmates.includes("맹구");
// true
classmates;
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length;
// 4
classmates.pop();
// '맹구'
classmates.length;
// 3
classmates;
// (3) ['철수', '영희', '훈이']

/**************************************************************************/

let developer = ["끈기", "창의력", "의사소통", "배우려는자세", "문제해결력"];
// undefined
developer[4];
// '문제해결력'
let dream = ["커리어점프", "성공", "할수있다"];
// undefined
dream.concat(developer);
// (8) ['커리어점프', '성공', '할수있다', '끈기', '창의력', '의사소통', '배우려는자세', '문제해결력']
let result = developer.concat(dream);
// undefined
result;
// (8) ['끈기', '창의력', '의사소통', '배우려는자세', '문제해결력', '커리어점프', '성공', '할수있다']
