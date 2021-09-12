// Function
// - fundamental building block in the program
// - subprogram ca be used multiple times
// - performs a task or caculates a value

// 1. Function declartion
// - function name (param1, param2) { body... return;}
// - naming: doSomething, command, verb
// - function is object in JS!!

function log(message) {
  console.log(message);
}
log("Hello?");
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const jm = { name: "jm" };
changeName(jm);
console.log(jm);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "default") {}

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printAll("A", "B", "C");

// 5. Local scope
// local variable, global variable
// 클로저 : 자식의 함수가 부모의 변수에 접근할 수 있는 것

// 6. Return a value
// return type x == return undefind

// 7. early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// 함수를 선언함과 동시에 바로 할당할 수 있는... function에 이름이 없는것 = anonymous function
// 이름이 있는 function = name function

const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression
// Arrow function
// always anonymous

const simplePrint2 = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint!");

const add2 = (a, b) => a + b;
const add = function (a, b) {
  // do something more
  return a + b;
};

// IIFE: Immediately Invoke Function Expression
(function hello() {
  console.log("IIFE");
})();

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 5, 10));
console.log(calculate("multiply", 5, 10));
