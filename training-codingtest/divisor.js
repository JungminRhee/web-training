// 두 정수 left, right
// left부터 right까지의 모든 수 들 중에,
// 약수의 개수가 홀수 : 뺌
// 약수의 개수가 짝수 : 더함
// 그 수를 return
// left: 13, right: 17
// 13: 약수 2개
// 14: 약수 4개
// 15: 약수 4개
// 16: 약수 5개
// 17: 약수 2개
// return 43 = 13+14+15-16+17
function solution(left, right) {
  let result = [];
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    result.push({ number: i, divisorCount: cnt });
  }
  for (let i of result) {
    i.divisorCount % 2 === 0 ? i.number : (i.number = i.number * -1);
  }
  return result //
    .map((item) => item.number)
    .reduce((prev, curr) => prev + curr, 0);
}
console.log(solution(13, 17));

function solution2(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 갯수가 홀수!
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

function solution3(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    // count 값을 2로 나누면 0 이 아니면 1인데 1은 true, 1은 홀수!
    else answer += i;
  }

  return answer;
}
