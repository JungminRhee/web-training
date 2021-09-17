// 변수는 데이터를 담고있는 것
// number, string, boolean, null, undefined --> 얘네를 제외하고는 다 Object!
// primitive type! //가장 작은 단위의 ..!
// 변수명을 만들 때는 의미 있는 이름으로 해야함
// 변수 선언과 동시에 메모리에 공간이 생김

let number = 2;
let number2 = number; //number에 있는 데이터가 복사되어서 number2에 들어가는것
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// Object
// Object는 단순히 변수를 선언하는 곳에 다 담아놓을 수 없음. 크기가 너무 큼
// Object는 각각 key의 위치를 나타내는 주소(reference)정도만 가지고 있는 것.
// 각각 key 마다 메모리에 할당됨.

let obj = {
  name: "ellie", // key: value
  age: 5,
};
console.log(obj.name);

let obj2 = obj; // obj가 가지고 있는 ref만 obj2에 복사하게 됨.
console.log(obj2.name);
obj.name = "james";
// obj는 어딘가에 따로 있고, 걔네를 가리키고 있는 ref는 변경이 불가능함 (const:상수변수)
// 그치만 ref가 보고 있는 key의 value들은 변경 가능. obj는 어딘가에 따로 저장되어있으니까!

// obj객체의 name을 바꿨을 뿐인데! 같은 주소를 가지고 있는 obj2에도 영향을 줍니다.
// 가리키고 있는 obj가 똑같음.
console.log("-----");
console.log(obj2);
console.log(obj);
