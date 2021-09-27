// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하자
// [i, j, k]를 원소로 가진 2차원 배열 commands
// commands의 모든 원소에 대해 연산을 적용했을 때 나온 결과를 배열로 return
// array의 길이 : 1이상 100이하
// array의 원소 : 1이상 100이하
// commands의 길이 : 1이상 50이하
// commands의 원소 : 길이가 3

function solution(array, commands) {
  var answer = [];
  let temp = [];
  for (let com of commands) {
    let [i, j, k] = com;
    temp = array.slice(i - 1, j).sort((a, b) => a - b);
    console.log(i, j, k, temp, temp[k - 1]);
    answer.push(temp[k - 1]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

function solution2(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
