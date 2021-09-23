// 두개의 숫자 뽑아서 더하기
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    // length -1 하거나 안하거나 똑같음.
    // j가 참일때만 코드 실행되니깐~
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      console.log(`i = ${numbers[i]}, j = ${numbers[j]}, sum = ${sum}`);
      if (answer.indexOf(sum) == -1) {
        answer.push(sum);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
console.log(solution([2, 1, 3, 4, 1, 5, 6, 7]));

function solution2(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];
  // Set 객체는 값 콜렉션으로, 삽입 순서대로 요소를 순회할 수 있습니다. 하나의 Set 내 값은 한 번만 나타날 수 있습니다. 즉, 어떤 값은 그 Set 콜렉션 내에서 유일합니다.

  return answer.sort((a, b) => a - b);
}
