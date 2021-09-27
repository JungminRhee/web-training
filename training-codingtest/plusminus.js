// 정수의 절댓값을 차례대로 담은 정수 배열 absolutes
// 정수들의 부호를 차례대로 담은 boolean 배열 signs
// 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성하자!
// absolutes의 길이: 1이상 1000이하
// signs의 길이는 absolutes와 같아야함
// sign[i] = true 일때 absolutes[i]는 양수, 아닐경우 음수

function solution(absolutes, signs) {
  let answer = [];

  for (let i = 0; i < absolutes.length; i++) {
    console.log(signs[i]);
    if (signs[i]) {
      answer[i] = absolutes[i];
    } else {
      answer[i] = absolutes[i] * -1;
    }
  }
  return answer.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}

console.log(solution([4, 7, 12], [true, false, true]));

function solution2(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
