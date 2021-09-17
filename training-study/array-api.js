// Q1. make a string out of an array.
// 배열을 스트링으로 만드는 join()
// parameter를 뭘 넣느냐에 따라서 apple and banana and orange 처럼 응용가능
// 무조건 , 를 넣는 toString()보다 훨씬 유용할거 같은 느낌!?
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(fruits);
  console.log(result);
}

// Q2. make an array out of a string.
// 스트링을 배열로 만드는 split()
// parameter 없이 넣으면 index 1칸짜리 배열로 만들어짐.
{
  const fruits = "🍓,🍌,🍉,🍇";
  const result = fruits.split(",");
  console.log(fruits);
  console.log(result);
}

// Q3. make this array look like this : [5,4,3,2,1]
// 배열 자체를 reverse 시키는 reverse()
// 유의점: 원본 배열도 같이 바뀐다
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(array);
  console.log(result);
}

// Q4. make new array without the first two elements
// 원본 배열도 바뀌는 splice()
// 배열의 변경을 시작할 인덱스, 제거할 요소의 수, 추가할 요소들을 parameter 값으로 받을 수 있다.
// 새로운 배열을 만드는 slice(), 반환값으로 추출한 요소를 포함해서 "새로운" 배열을 만듬
// 인덱스를 기준으로 추출 시작점, 종료점을 잡아 추출한다.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, array.length); // different of slice(), splice()
  console.log(array);
  console.log(result);
}

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

// Q5. find a student with the score 90
// find(function ...) 로 사용하고 그 함수를 만족하는 "첫 번째" 요소의 값을 반환함
// 그 요소가 없다면 undefined을 반환
// 아래의 경우 student의 점수가 90점인 name "C"의 객체를 반환함
{
  console.clear();
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
  console.log(result);
}
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// filter(function ...) 로 사용. 함수의 테스트를 통과하는 "모든" 요소를 모아 새로운 배열로 만듬
// 보통 anonymous 함수를 사용하기 때문에 arrow function을 사용함
// 이름이 없는 anonymous function은 function과 return을 없애고 => 를 통해 arrow function으로 바꿀수 있다!
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88].
// map(function ...) 반복문을 돌면서 배열 안의 요소들을 1:1로 짝지어 주는것
// 배열을 1:1로 짝짓되 기존 객체를 수정하지 않음.
// key들은 중복 불가.
// 배열.map((요소, 인덱스, 배열) => { return 요소 });
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some(), every()

// some() 배열을 순회하다가 특정 조건을 만족하면 그 즉시 중단 (return True)
// every() 배열을 순회하다가 특정 조건을 만족하지 않으면 그 즉시 중단 (return False)
// 아래의 예시에는 결국 true로 return 해야하기 때문에 every 보다는 some을 쓰는게 가독성에 좋다.
// ! 를 쓰면 !true = false, !false = true 당연히 반대로 보임
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
  console.log(!true);
}

// Q9. compute students' average score
// reduce(), reduceRight()
// 얘도 배열 요소대로 반복을 하는 함수, 초기값과 누적값, 현재값들을 설정할 수 있다.
// 배열.reduct((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초기값);

// 아래의 예시에서는 초기값을 0으로 두고 배열의 첫번째 요소인 A의 score을 prev(=0)과 더하고
// 그 다음 반복으로 두번째 요소인 B의 score와 prev(=45)를 더해나가서 마지막까지 모든 score의 합을 구한다.
// 실제 로그를 찍을때는 총합에 객체의 길이를 나누기 때문에 문제였던 평균값을 구하는 내용을 만족한다.
// reduce()는 배열의 0부터 진행
// reduceRight()는 말그대로 배열의 오른쪽, 끝부터 진행
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containig all the scores
// result shoud be: '45, 80, 90, 66, 88'
// 아래처럼 . 으로 api들을 이을 수 있다!
//
{
  const result = students
    .map((student) => student.score)
    // .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result shoud be: '45, 66, 80, 88, 90'
// sort([compareFunction]) // compareFunction이 생략되면 배열의 element들이 문자열로 취급되어 유니코드 값 순서대로 정렬됨
// a, b 두개의 element로 입력받아서
// 이 함수가 리턴하는 값이 0보다 작을 경우 a가 b보다 앞에 오도록 정렬하고
// 이 함수가 리턴하는 값이 0보다 클 경우 b가 a보다 앞에오도록 정렬
// 0을 리턴하면 a와 b의 순서를 변경하지 않음
// ex. 45와 80을 비교했을때 45-80은 0보다 작으므로 45가 앞으로 정렬
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
