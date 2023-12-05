const fruits = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
// undefined

fruits[0].number + " " + fruits[0].title;
// '1 레드향'

let popularFruit = [];
// undefined
popularFruit.push(fruits[0].number + " " + fruits[0].title);
// 1
popularFruit.push(fruits[1].number + " " + fruits[1].title);
// 2
popularFruit.push(fruits[2].number + " " + fruits[2].title);
// 3
popularFruit.push(fruits[3].number + " " + fruits[3].title);
// 4
popularFruit.push(fruits[4].number + " " + fruits[4].title);
// 5
popularFruit.push(fruits[5].number + " " + fruits[5].title);
// 6
popularFruit.push(fruits[6].number + " " + fruits[6].title);
// 7
popularFruit.push(fruits[7].number + " " + fruits[7].title);
// 8
popularFruit.push(fruits[8].number + " " + fruits[8].title);
// 9
popularFruit.push(fruits[9].number + " " + fruits[9].title);
// 10
popularFruit;
// (10) ['1 레드향', '2 샤인머스켓', '3 산청딸기', '4 한라봉', '5 사과', '6 애플망고', '7 딸기', '8 천혜향', '9 과일선물세트', '10 귤']
