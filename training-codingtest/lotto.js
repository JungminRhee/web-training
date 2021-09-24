// 1부터 45까지의 숫자 중 6개를 찍어서 맞추는 로또!
// 일부 번호를 알아볼 수 없게 됨.
// 알아볼 수 없는 번호 0으로 표기
// 당첨이 가능했던 최고 순위와 최저 순위를 알아보자!
// 구매한 로또 번호 배열 : lottos
// 당첨 번호를 받은 배열 : win_nums
// 두 배열의 원소는 정렬되지 않았을 수 있음.
// lottos = 0만 중복될 수 있음, 0 이상 45 이하
// win_nums = 중복 숫자 X, 1 이상 45 이하
// 당첨 가능 했던 최고 순위, 최저 순위 같이 return

function solution(lottos, win_nums) {
  let zero = 0;
  let correct = lottos //
    .filter((num) => {
      if (num > 0) {
        return win_nums.includes(num);
      } else {
        zero++;
      }
    })
    .sort((a, b) => a - b);
  //console.log(correct.length);
  switch (correct.length) {
    case 0:
      if (zero === 6) {
        return [6 - zero + 1, 6];
      } else {
        return [6 - zero, 6];
      }
    case 1:
      return [7 - (correct.length + zero), 7 - correct.length];
    case 2:
      return [7 - (correct.length + zero), 7 - correct.length];
    case 3:
      return [7 - (correct.length + zero), 7 - correct.length];
    case 4:
      return [7 - (correct.length + zero), 7 - correct.length];
    case 5:
      return [7 - (correct.length + zero), 7 - correct.length];
    case 6:
      return [1, 1];
  }
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
console.log(solution([45, 4, 35, 20, 3, 9], [1, 2, 5, 6, 7, 8]));

function solution2(lottos, win_nums) {
  const answer = [];
  // win_nums에 있는 숫자를 세서 배열로 만든후 length 를 min
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  // 0인 값의 수와 min값을 더해서 max
  const max = lottos.filter((n) => n === 0).length + min;

  // max가 1 이상일 경우에는 answer 값에 7에서 - max 아닐 경우 6등으로 처리
  max > 1 ? answer.push(7 - max) : answer.push(6);
  // min도 1 이상일 경우 7-min, 아닐 경우 6등으로 처리
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}
console.log(solution2([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution2([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution2([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
console.log(solution2([45, 4, 35, 20, 3, 9], [1, 2, 5, 6, 7, 8]));
