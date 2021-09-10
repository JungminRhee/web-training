/* // 01. make a string out of an array.
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(fruits);
    console.log(result);
}

// 02. make an array out of a string.
{
    const fruits = '🍓,🍌,🍉,🍇';
    const result = fruits.split(',');
    console.log(fruits);
    console.log(result);
}

// 03. make this array look like this : [5,4,3,2,1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();    
    console.log(array);
    console.log(result);
}

// 04. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, array.length);   // different of slice(), splice()
    console.log(array);
    console.log(result);
}
 */

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

/* // 05. find a student with the score 90
{
    const result = students.find(function(student, index) {
        return student.score === 90;
    });
    console.log(result);
} */

// 06. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
