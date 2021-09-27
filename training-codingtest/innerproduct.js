// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수
// return: a와 b의 내적
// a, b의 길이는 1이상 1000이하
// a, b의 모든 수 : -1000 ~ 1000

function solution(a, b) {
  var answer = 0;
  answer = a.reduce((acc, cur, i) => {
    answer = a[i] * b[i];
    return acc + answer;
  }, 0);
  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

function solution2(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}
