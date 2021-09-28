// n : 1 이상 100,000,000 이하인 자연수
// n (10진법) - n (3진법) - n(앞뒤 반전-3진법) - n (10진법)
// 45         - 1200     - 0021              - 7

function solution(n) {
  let number = n.toString(3).split("").reverse().join("");
  return Number.parseInt(number, 3);
}
console.log(solution(125));

const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
