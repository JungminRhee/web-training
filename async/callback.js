"usr strict";

// JavaScript is synchronous.
// Excute the code black in order after hoisting. 호이스팅이 된 이후부터 하나하나 동기적으로 실행됨
// hoisting: var, function declartion => 선언들이 제일 위로 올라가는것!
// sync : 선언을 제외하고는 위부터 순서대로 진행
// async : 언제 실행될지 모름!!!

console.log("1"); // 동기
setTimeout(() => console.log("2"), 1000); //나중에 다시 불러조! call back. 보통 arrow function 으로 씀  // 비동기
console.log("3"); // 동기

// Synchronous callback // 함수 선언 자체는 젤 먼저 되었을 것. hoisting!!
// 그래서 1, 3, hello ... 2가 출력 됨.

function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello")); // 동기

// Asynchronous callback // 얘도 hoisting으로 위에서 선언 됨.
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000); // 비동기

// 콜백도 동기적, 비동기적으로 실행하는 방법이 있다
// 언어마다 콜백을 지원하는 방식이 다름
// 자바스크립트는 이런식으로 씀
// 콜백들로만 쓰면... 콜백지옥...

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
