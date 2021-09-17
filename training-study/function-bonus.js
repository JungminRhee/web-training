// 함수 선언
function add(num1, num2) {
  return num1 + num2;
}
function print(name, age) {
  //인자도 의미있는걸 쓰자
  console.log(`${name} ${age}`);
}

function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) {
  const result = operator(2, 3); // add(2,3) 과 동일.
  console.log(result);
}

surprise(add); //surprise 함수의 operator 인자로 add함수의 ref를 전달한 것이므로.
surprise(divide);

/* //함수 할당
const result = add(2, 3);
console.log(result);

const doSomething = add;
// 얘도 함수를 가리키는 ref를 복사하는 것.

const result2 = doSomething(2, 3);
console.log(result2);
 */
