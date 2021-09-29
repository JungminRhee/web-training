// 부서별로 신청한 금액 배열과 예산을 이용해
// 최대 몇개의 부서에 물품을 지원할 수 있는지 return

// d: 부서별로 신청한 금액이 들어있는 배열, 길이 1 이상 100이하
// d의 각 원소는 1이상 100,000 이하의 자연수
// budget : 예산, 1 이상 10,000,000 이하의 자연수

function solution(d, budget) {
  const dept = d.sort((a, b) => a - b);
  let total = 0;
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    total = total + dept[i];
    if (total <= budget) {
      count++;
    }
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));

function solution2(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money += val;
    if (money <= budget) {
      answer++;
    }
  });
  return answer;
}
