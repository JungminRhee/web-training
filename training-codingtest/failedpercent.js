// 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플에이어의 수 / 스테이지에 도달한 플레이어 수
// N : 전체 스테이지의 개수
// stages : 게임을 하는 사용자들의 현재 스테이지 번호 배열
// return : 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열
// N : 1이상 500이하
// stages : 길이 -> 1이상 200,000 이하, 원소 -> 1이상 N+1 이하의 자연수 (N+1은 N번째 마지막 스테이지)
// 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0으로 정의

function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i++) {
    let cnt = 0;
    let players = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] >= i) {
        // 현재 스테이지보다 숫자가 큰 스테이지의 개수를 세준다
        players++; // 도달한 사람들 추가
      }
      if (stages[j] === i) {
        // 현재 스테이지와 숫자가 같은 사람 : 못깬 사람
        cnt++; // 카운트 해준다
      }
    }
    answer.push({ stage: i, percent: cnt / players });
    console.log(i, players, cnt);
  }

  answer.sort((a, b) => {
    if (a.percent === b.percent) {
      return a.stage - b.stage;
    } else {
      return b.percent - a.percent;
    }
  });
  console.log(answer);
  return answer.map((item) => item.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));

console.log(solution(8, [1, 2, 3, 4, 5, 6, 7]));
//result : 7 6 5 4 3 2 1 8
