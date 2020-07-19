"use strict";
// JSON
// client -> Server 어떻게 통신 할 수 있는지 정의한게 HTTP(Hypertext Transfer Protocal)
// AJAX(Asynchronous JavaScript And XML),
//XHR(XHL Http Request),
// fetch() API활용시 간편하게 데이터를 주고 받을 수 있다.(IE 지원되지 않음)
// JSON(JavaScript Object Notation)
// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for seralization and transmission of data between the network the network  connection
// - independent programming language and platform
// object ------------------> JSON(string) 변환할지
//         serialize(직렬화)
// object <------------------직렬화된 JSON(string) 어떻게 object 변환할지
//         deserialize

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"), // 포함되지 않는다.
  //  포함되지 않는다.
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// replacer?
json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

// replacer callback function
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // error 함수는 전달되지 않는다.

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // error string으로 전닫되었기때문에
console.log(obj.birthDate.getDate());
