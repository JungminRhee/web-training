"use strict";

// Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할때 콜백함수 대신 쓸 수 있는 유용한 객체!!
// state: 프로세스가 operation을 수행 중인지, 성공했는지, 실패했는지 알 수 있는 상태에 대한 이해 필요
// state: pending -> fulfilled or refected
// Producer와 Consumer의 차이를 이해하고 있어야함

// 1. Producer
// When new Promise is created, the executor runs automatically.

// 만약 promise를 만드는 순간 excute라는 콜백함수가 바로 실행됨을 확인할 수 있다
// promise 안에 네트워크 통신을 하는 것을 작성했다면 promise가 만들어지는 순간 네트워크 통신을 수행하게 됨.
// 만약 네트워크 통신을 사용자가 요청했을때만 해야된다면, 이건 안됨!! --> 불필요할때도 요청되게 됨
const promise = new Promise((resolve, reject) => {
  // doing some heavy work ()
  // 시간이 좀 걸리는 일들은 promise를 통해서 비동기적으로 처리하는 것이 좋음 (like network, read files)
  console.log("doing somthing...");
  setTimeout(() => {
    resolve("ellie");
    //reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally를 이용해서 값을 받아올 수 있음.
// then : promise가 정상적으로 수행되었을때 마지막에 최종적으로 나오는 resolve의 값을 전달해서 보여줌. 같은 promise를 return
// then은 값을 전달해도 되지만 promise를 전달해도 된다.
// catch : return된 promise에 캐치를 등록, 에러가 발생되었을때 어떻게 처리된건지 등록
// chaining..
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));
// 콜백함수를 전달할때, 받아온 함수를 바로 전달할 때 한개일 경우는 아래처럼 바로 전달할 수 있음.
// 1개를 받아서 고대로 전달하는 경우에만 아래처럼 쓸 수 있음.
getHen() // <- 옆에처럼 주석처리를 하면 한줄로 쭉 만들지 않고 가독성 좋게 아래처럼 만들어줌
  .then(getEgg) //여기에서 발생한 에러를 바로 처리하고 싶을 경우 바로 catch로 대신 처리할 수 있음.
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
