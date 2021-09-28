// 시험은 최대 10,000문제로 구성
// 문제의 정답은 1, 2, 3, 4, 5 중 하나
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들어간 배열 : answers
// 1번 수포자 : 1,2,3,4,5,...
// 2번 수포자 : 2,1,2,3,2,4,2,5,...
// 3번 수포자 : 3,3,1,1,2,2,4,4,5,5,...
// 가장 많은 문제를 맞힌 사람이 누구인지 배열 return
// 가장 높은 점수를 받은 사람이 여럿일 경우 오름차순 정렬해서 return

function solution(answers) {
  let answer = [];
  let count = [0, 0, 0];
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    student1[i % 5] === answers[i] ? count[0]++ : count[0];
    student2[i % 8] === answers[i] ? count[1]++ : count[1];
    student3[i % 10] === answers[i] ? count[2]++ : count[2];
  }

  const maxCount = Math.max(...count);

  for (let j = 0; j < count.length; j++) {
    if (count[j] === maxCount) {
      answer.push(j + 1);
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));

function solution2(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
