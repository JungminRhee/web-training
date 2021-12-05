function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return "prototype: " + (this.first + this.second);
};

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this: " + (this.first + this.second);
};
var rhee = new Person("rhee", 10, 10);

console.log("kim.sum()", kim.sum());
console.log("rhee.sum()", rhee.sum());

// 자바스크립트에서 함수는 객체다!
// 1. 리터럴에 의해 생성
// 2. 변수나 배열의 요소, 객체 프로퍼티 등에 할당 가능
// 3. 함수의 인자로 전달 가능
// 4. 함수의 리턴값으로 리턴 가능
// 5. 동적으로 프로퍼티를 생성 및 할당 가능

var foo = function (func) {
  func();
};

foo(function () {
  console.log("함수도 argument가 될 수 있습니다.");
});

var foo2 = function () {
  return function () {
    console.log("this function is the return value.");
  };
};
var bar = foo2();
bar();

function add(x, y) {
  return x + y;
}
console.dir(add);
