"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

console.clear();
// 3.Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach(value, index, array) 값, 인덱스와 값, array전체
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push("Strawberry", "peach");
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("Strawberry", "lemon");
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("Strawberry", "peach", "lemon");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "apple", "watermelon");
console.log(fruits);

// combine two arrays
// concat
const fruits2 = ["coconut", "mango"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf 몇번째에 원하는 값이 있는지  return index number
console.clear();
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("watermelon"));
console.log(fruits.indexOf("water"));

// includes 배열안에 원하는 값이 있는지 return True / Fasle
console.log(fruits.includes("apple"));
console.log(fruits.includes("apple1"));

// lastIndexOf 같은데이터가 있을 때 마지막 데이터
console.clear();
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));

// map callback function 호출에 따라 새로운 결과가 새 배열로 작성됨

// filter callback function 호출에 따라 조건값에 따른 값을 새 배열로 작성

// reduce 배열안의 값을 더한다.

// reduceRight 배열들을 하나로 만들어 새 배열로 반환
