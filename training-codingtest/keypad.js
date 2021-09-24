// 키패드 누르기
// 1 2 3
// 4 5 6
// 7 8 9
// * 0 #

// 왼손 엄지는 * 오른손 엄치는 #에서 시작
// 상하좌우 4가지 방향으로만 이동 가능
// 1, 4, 7은 왼손
// 3, 6, 9는 오른손
// 가운데는 가까운 위치인 손가락이 사용.
// 동일하게 이동해야한다면 왼손잡이는 왼손이 오른손잡이는 오른손이
// 순서대로 누를 번호가 담긴 배열 : numbers
// 오른손잡이인지 왼손잡이인지 : hand
// 각 번호를 누른 엄지손가락이 왼손인지 오른손인지를 나타내는 연속된 문자열 형태로 return
// numbers 배열의 크기 : 1 이상 1000 이하
// numbers 배열의 원소 값은 0이상 9이하
// hand : "left" or "right"
// 왼손 엄지 사용 : L, 오른손 엄지 사용: R
// ex) LRLLLRRRLL

function solution(numbers, hand) {
  let answer = [];
  const keys = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let left = keys["*"];
  let right = keys["#"];
  for (let num of numbers) {
    let [i, j] = keys[num];
    //console.log([i, j], num);
    if (j === 0) {
      answer.push("L");
      left = keys[num];
      console.log(`left: ${left}`);
    } else if (j === 2) {
      answer.push("R");
      right = keys[num];
      console.log(`right: ${right}`);
    } else {
      let tmpL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
      let tmpR = Math.abs(i - right[0]) + Math.abs(j - right[1]);
      //console.log(`tmpL : ${tmpL} tmpR: ${tmpR}`);

      if (tmpL > tmpR) {
        answer.push("R");
        right = keys[num];
      } else if (tmpL < tmpR) {
        answer.push("L");
        left = keys[num];
      } else if (tmpL === tmpR) {
        if (hand === "right") {
          answer.push("R");
          right = keys[num];
        } else {
          answer.push("L");
          left = keys[num];
        }
      }
    }
  }
  return answer.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
