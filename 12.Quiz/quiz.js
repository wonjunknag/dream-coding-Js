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

// quiz11.
