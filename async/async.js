// async & await
// clear style of using promise
// 무조건 async&await을 쓰라는 것 아님!! 무조건 대체가능한 건 아님
// promise로 써야하는 경우가 있음

// 1. async
// 비동기적으로 처리를 하겠다! 하지 않으면 자바스크립트 엔진은 동기적으로 처리됨
// 사용자는 10초 정도 웹페이지가 비어있는 상태를 보게된다.
// async 키워드를 이용하면 promise 를 간편하게 쓸 수 있는 syntatic Sugar!!
// 번거롭게 promise를 쓰지 않아도 promise로 변환됨.
async function fetchUser() {
  // do network requset in 10 secs...
  return "ellie";
  /*   return new Promise((resolve, reject) => {
    resolve("ellie"); // 그냥 return "ellie" 를 쓰면 pending 상태가 된다.
  }); */
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// await라는 키워드는 async 키워드가 붙은 함수에서만 쓸 수 있음
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍌";
}
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise; // Promise로 만들고 실행하면 1초 걸림 (병렬적으로 실행)
  const banana = await bananaPromise;
  //   const apple =  getApple();  // 나눠서하면 2초 걸리는데
  //   const banana = getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
// 병렬적으로 실행할 수 있는 경우에는 Promise에 있는 API를 사용한다.
// promise에는 아래처럼 유용한 API가 있다!
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
