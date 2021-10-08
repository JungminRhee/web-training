// 복서 몸무게 : weights
// 복서 선수들의 전적: head2head
// 1. 전체 승률이 높은 복서의 번호가 앞쪽으로
// 아직 다른 복서와 붙어본적이 없는 복서의 승률 : 0%
// 2. 승률이 동일할 경우, 자신보다 몸무게가 무거운 복서를 이긴 횟수가 많은 복서의 번호가 앞으로
// 3. 자신보다 몸무게가 무거운 복서를 이긴 횟수도 동일할 경우
// 몸무게가 무거운 복서가 앞으로
// 4. 몸무게까지 동일할 경우, 번호 순
// 2 <= weights.length <= 1000
// 45 <= weights[i] <= 150
// weights.length = head2head.length
// head2head[i] : i+1번 복서의 전적
// head2head[i][j] : i+1번 복서와 j+1번 복서의 매치 결과
// N : 아직 시합 X
// W : i+1번 복서가 이김
// L : i+1번 복서가 짐
// head2head[i][i] 는 항상 'N'

function solution(weights, head2head) {
  let answer = [];

  for (let i = 0; i < weights.length; i++) {
    let heavywin = 0;
    let win = 0;
    let lose = 0;
    for (let j = 0; j < weights.length; j++) {
      if (head2head[i][j] === "W") {
        if (weights[i] < weights[j]) {
          heavywin++;
        }
        win++;
      } else if (head2head[i][j] === "L") {
        lose++;
      }
    }
    let late = (100 * win) / (win + lose);
    if (isNaN(late)) {
      late = 0;
    }
    answer.push({
      winlate: late,
      heavy: heavywin,
      weight: weights[i],
      num: i + 1,
    });
  }

  answer.sort((a, b) => {
    if (a.winlate === b.winlate) {
      if (a.heavy === b.heavy) {
        if (a.weight === b.weight) {
          return a.num - b.num;
        }
        return b.weight - a.weight;
      }
      return b.heavy - a.heavy;
    } else {
      return b.winlate - a.winlate;
    }
  });
  //   console.log(answer);
  return answer.map((item) => item.num);
}

console.log(solution([50, 82, 75, 120], ["NLWL", "WNLL", "LWNW", "WWLN"]));
console.log(solution([50, 75, 75, 120], ["NNNN", "NNNN", "NNNN", "NNNN"]));

function solution2(weights, head2head) {
  return head2head
    .map((l, i) =>
      l.split("").reduce(
        (acc, v, j) => {
          acc[0] += v === "W" ? 1 : 0;
          acc[1] += v === "W" ? (weights[i] < weights[j] ? 1 : 0) : 0;
          acc[2] += v === "L" ? 1 : 0;
          return acc;
        },
        [0, 0, 0]
      )
    )
    .map((v) => [v[0] / (v[0] + v[2]), v[1]])
    .map((v, i) => [i + 1, { t: v[0], s: v[1], w: weights[i] }])
    .sort(
      (a, b) =>
        b[1].t - a[1].t || b[1].s - a[1].s || b[1].w - a[1].w || a[0] - b[0]
    )
    .map((v) => v[0]);
}
