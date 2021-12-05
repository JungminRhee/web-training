function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
var kim = new Person("kim", 10, 20, 30);
var rhee = new Person("rhee", 10, 10, 10);

console.log("kim.sum()", kim.sum());
console.log("rhee.sum()", rhee.sum());

var d1 = new Date("2021-12-05");
console.log("d1.getFullYear()", d1.getFullYear());
console.log("d1.getMonth()", d1.getMonth());

console.log("Date", Date);

console.log("Person()", Person());
