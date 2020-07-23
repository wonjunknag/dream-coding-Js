"use strict";
// 제주 코딩 50문제

// quiz1. arrary delete(400, 500)
const arr = [100, 200, 300, 400, 500];
arr.splice(3, 5);
console.log(arr);

// quiz2. variable Built-in function
const arr1 = [200, 100, 300];
arr1.splice(1, 0, 1000);
console.log(arr1);

// [200, 100, 10000, 300]

// quiz3. variable type?
const arr2 = [100, 200, 300];
console.log("object");
console.log(typeof arr2);

// quiz4. variable type2
console.log("2번");

// quiz5. for calculator
// 10 + 1 + 3 +  2 = 16

// quiz6
// 2번

//quiz7
// 2번, 5번

//quiz8
// 84 (맨뒤에 있는 걸 읽는다.)
let d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
};
console.log(d["weight"]);

// quzi9 concat
let year = "2019";
let month = "04";
let day = "26";
let hour = "11";
let minute = "34";
let secound = "27";

let result = year
  .concat("/", month)
  .concat("/", day)
  .concat(" ", hour)
  .concat(":", minute)
  .concat(":", secound);
console.log(result);

// quiz10 star   1, 3, 5, 7, 9
function staring(number) {
  let string = "";
  for (let i = 0; i < number; i++) {
    for (let j = 5; j - i > 0; j--) {
      string = string + " ";
    }
    for (let k = 0; k <= i * 2; k++) {
      string = string + "*";
    }
    console.log(string);
    string = "";
  }
}
// const num = prompt();
// staring(num);

// quiz11. add for
let s = 0;
for (let i = 0; i < 101; i++) {
  s = s + i;
}
console.log(s);

// quiz12. game character
class Wizard {
  constructor(heath, mana, armor) {
    this.heath = heath;
    this.mana = mana;
    this.armor = armor;
  }

  attack() {
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.heath, x.mana, x.armor);
x.attack();

// 545 210 10
// 파이어볼

// quiz13
const planet = {
  1: "수성",
  2: "금성",
  3: "지구",
  4: "화성",
  5: "목성",
  6: "토성",
  7: "천왕성",
  9: "해왕성",
};

// const planetName = prompt();
// console.log(planet[planetName]);

// quiz14.
function multiple() {
  // let input = prompt();
  if (input % 3 === 0) {
    console.log("짝");
  } else {
    console.log(input);
  }
}
// multiple();

// quiz15
function aboutMe() {
  // let name = prompt();
  console.log(`안녕하세요, 저는 ${name}입니다.`);
}
// aboutMe();

// quiz16
{
  let word = "거꾸로".split("");
  console.log(word.reverse().join(""));
}

// quiz17
{
  // const stature = prompt();
  function statureLimit(stature) {
    if (stature < 150) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
  // statureLimit(stature);
}

// quiz18
{
  const subject = { math: 20, english: 30, korean: 40 };
  function sujectAvg(subject) {
    const sum = subject.math + subject.english + subject.korean;
    const result = sum / 3;
    console.log(result);
  }
  sujectAvg(subject);
}

// quiz19
{
  const number = "2 3";
  const numberArray = number.split(" ");
  console.log(parseInt(numberArray[0]) ** numberArray[1]);
}

// quzi20
{
  const number = "10 5";
  const numberArray = number.split(" ");
  console.log(
    parseInt(numberArray[0] / numberArray[1]),
    parseInt(numberArray[0] % numberArray[1])
  );
}

// quiz21
