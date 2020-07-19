// 콜백지옥 예제
// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((reslolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          reslolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

// UserStorage Execution
// 문제점
// - 읽기가 거북하다. 가독성이 떨어짐, 비지니스 로직도 알아보기 힘듬
// - error, debuging시 어렵다.
// - 유지보수도 어렵다.
const userStorage = new UserStorage();
const id = "ellie";
const password = "dream";
// const id = prompt("enter your id");
// const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
