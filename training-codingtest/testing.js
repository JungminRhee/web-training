//  i행 j열의 값은 i번 학생이 평가한 j번 학생의 과제 점수입니다.
// 당신은 각 학생들이 받은 점수의 "평균"을 구하여, 기준에 따라 학점을 부여하려고 합니다.
// 학생들이 자기 자신을 평가한 점수가 유일한 최고점 또는 유일한 최저점이라면 그 점수는 제외하고 평균을 구합니다.
// 90점 이상 : A
// 80점 이상 90점 미만 : B
// 70점 이상 80점 미만 : C
// 50점 이상 70점 미만 : D
// 50점 미만 : F
// 학생들의 점수가 담긴 정수형 2차원 배열 scores
// 학생들의 학점을 구하여 하나의 문자열로 만들어서 return

function scoreToGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 50 && score < 70) {
    return "D";
  } else {
    return "F";
  }
}
function solution(scores) {
  let answer = [];
  for (let i = 0; i < scores.length; i++) {
    let array = [];
    let average;
    for (let j = 0; j < scores.length; j++) {
      array.push(scores[j][i]);
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
    if (
      (array.filter((score) => score === max).length === 1 &&
        array.indexOf(max) === i) ||
      (array.filter((score) => score === min).length === 1 &&
        array.indexOf(min) === i)
    ) {
      array.splice(i, 1);
    }
    const avg = (arr) => arr.reduce((p, c) => p + c, 0) / array.length;
    average = avg(array);
    answer.push(scoreToGrade(average));
  }
  return answer.join("");
}

let solution2 = (scores) =>
  scores[0]
    .map((_, c) => scores.map((r) => r[c]))
    .map((s, i) => [...s.splice(i, 1), s])
    .map(([m, s]) =>
      Math.min(...s) <= m && m <= Math.max(...s) ? [m, ...s] : s
    )
    .map(
      (s) =>
        "FDDCBAA"[
          Math.max(parseInt(s.reduce((a, c) => a + c) / s.length / 10) - 4, 0)
        ]
    )
    .join("");

console.log(
  solution2([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);

console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
);

console.log(
  solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100],
  ])
);
