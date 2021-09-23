// 없는 숫자 더하기
function solution(numbers) {
  var answer = -1;
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = count //
    .sort()
    .filter((num) => !numbers.includes(num))
    .reduce((prev, curr) => prev + curr, 0);
  return result;
}

console.log(solution([6, 4, 5, 7, 3]));

// 1, 2, 8, 9
// 합계 : 20
