// false : 0, -0, '', null, undefined
// true : -1, 'hello', 'null', [], 'false'

let num = 9;
// 1.
if (num) {
  console.log(num);
}
// 2.
num && console.log(num); // && 앞쪽이 true면 뒤에가 실행됨.

// 1과 2는 똑같음.

let obj = {
  name: "ellie",
};
if (obj) {
  console.log(obj.name);
}

obj && console.log(obj.name); // obj가 있다면 obj.name에 접근 가능.
// 한줄에 더 깔끔하게 작성되므로 2번으로 많이 씀
