"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or fuctionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const person = { name: "wonjun", age: 39 };
print(person);

const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
console.log(person4);
// key, value의 name이 같다면 하나의 이름으로 object 생성 가능
// Javascript class가 없었을 때는 아래와 같이 작성했었다.
function makePerson(name, age) {
  return {
    name,
    age,
  };
}
// 4. Constructor Function
// class 형태로 작성시
const person5 = new Person("wonjun", 30);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("a" in ellie);
console.log(ellie.a);

// 6. fro..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

// another example (같은 이름의 key가 있다면 덮어 씌어지게 된다.)
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
