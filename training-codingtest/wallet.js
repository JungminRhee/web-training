// 지갑의 크기
// 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes
// 모든 명함을 수납할 수 있는 가장 작은 지갑의 크기를 return
// sizes : 1이상 10,000 이하. 원소는 [w, h] g형식 [가로, 세로]
// w, h는 1이상 1,000이하의 자연수

function solution(sizes) {
  let width = [];
  let hight = [];

  for (let size of sizes) {
    const [w, h] = size;
    if (w >= h) {
      width.push(w);
      hight.push(h);
    } else {
      width.push(h);
      hight.push(w);
    }
  }

  return Math.max(...width) * Math.max(...hight);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
