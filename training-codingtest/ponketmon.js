// N 마리 폰켓몬 중 N/2 마리를 가져가도 좋다!
// 종류에 따라 번호가 붙음
// 같은 종류의 폰켓몬은 같은 번호를 가짐
// 최대한 많은 종류의 폰켓몬을 포함해서 N/2마리를 선택하려함
// 폰켓몬 종류 번호가 담긴 배열 nums
// nums: 1차원 배열, 길이 : 1이상 10,000이하
// 폰켓몬 종류 번호: 1이상 200,000이하의 자연수
// 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return!

function solution(nums) {
  let numbers = [...new Set(nums)];
  const max = nums.length / 2;

  return numbers.length > max ? max : numbers.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([1, 1, 1, 1]));
console.log(solution([3, 3, 3, 2, 2, 2]));

// const getCombinations = (array, selectNumber) => {
//   const results = [];
//   if (selectNumber === 1) {
//     // 1개씩 선택한다면 모든 배열의 원소를 return
//     return array.map((element) => [element]);
//   }
//   array.forEach((fixed, index, origin) => {
//     const rest = origin.slice(index + 1); // fixed 다음 index부터 끝까지의 배열 (조합)
//     const combinations = getCombinations(rest, selectNumber - 1); // rest에 대한 조합을 구한다.
//     const attached = combinations.map((combination) => [
//       // fixed와 rest에 대한 조합을 붙인다.
//       fixed,
//       ...combination,
//     ]);
//     results.push(...attached); //result 배열에 push
//   });
//   return results;
// };
// const combination = getCombinations(numbers, count);
