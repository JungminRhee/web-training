function solution(n, lost, reserve) {
  // 체육복을 잃어버렸으면서 여벌이 없는 경우
  const realLost = lost
    .sort((a, b) => a - b)
    .filter((element) => !reserve.includes(element));

  // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
  let realReserve = reserve
    .sort((a, b) => a - b)
    .filter((element) => !lost.includes(element));

  // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우 (realLost.filter)
  return (
    n -
    realLost.filter((lost) => {
      // lend : 체육복을 빌려줄 수 있는 경우 중 첫 번째 요소
      const lend = realReserve.find(
        // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우 (절대값 1로 양옆 한칸 (-1, 1)을 계산)
        (reserve) => Math.abs(reserve - lost) == 1
      );
      // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 것으로 간주. lost를 return
      if (!lend) return lost;

      // 빌려줬으면 reserve 배열에서 빌려준 사람 제외
      realReserve = realReserve.filter((reverse) => reverse !== lend);
    }).length
  );
}

console.log(solution(5, [1, 2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(3, [3], [1]));
// console.log(solution(5, [1, 2, 3], [2, 3, 4]));
// console.log(solution(5, [2, 3, 4], [1, 2, 3]));

function solution2(n, lost, reserve) {
  return (
    n -
    lost.filter((a) => {
      const b = reserve.find((r) => Math.abs(r - a) <= 1);
      if (!b) return true;
      reserve = reserve.filter((r) => r !== b);
    }).length
  );
}
console.log(solution2(5, [1, 2, 4], [1, 3, 5]));
console.log(solution2(5, [1, 2, 3], [2, 3, 4]));
