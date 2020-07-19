"use strict";

// Synchronous callback
function printImmediately(print) {
  print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
// JavaScript is synchronous. 동기적인
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration   변수나 함수가 자동적으로 맨위에 올라가게 된다.
// 동기
console.log("1");
// 비동기식
setTimeout(() => console.log("2"), 1000);
// 동기
console.log("3");
// 동기
printImmediately(() => console.log("hello"));
// 비동기식
printWithDelay(() => console.log("async callback"), 2000);

// 콜백지옥 예제
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// UserStorage Execution
// 문제점
// - 읽기가 거북하다. 가독성이 떨어짐, 비지니스 로직도 알아보기 힘듬
// - error, debuging시 어렵다.
// - 유지보수도 어렵다.
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
