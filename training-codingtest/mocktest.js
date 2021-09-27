// 시험은 최대 10,000문제로 구성
// 문제의 정답은 1, 2, 3, 4, 5 중 하나
// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들어간 배열 : answers
// 1번 수포자 : 1,2,3,4,5,...
// 2번 수포자 : 2,1,2,3,2,4,2,5,...
// 3번 수포자 : 3,3,1,1,2,2,4,4,5,5,...
// 가장 많은 문제를 맞힌 사람이 누구인지 배열 return
// 가장 높은 점수를 받은 사람이 여럿일 경우 오름차순 정렬해서 return

function solution(answers) {
  var answer = [];
  let student1 = [1, 2, 3, 4, 5];
  let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.map((ans, index) => {
    if (ans === student1[index]) {
      console.log();
    }
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
