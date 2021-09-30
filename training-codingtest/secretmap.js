// 비밀지도는 숫자로 암호화 되어있어있음
// 위치를 확인하기 위해서는 암호를 해독해야함

// 1. 지도는 한변의 길이가 n 인 정사각형 배열
// 공백 (" ") 또는 벽 ("#") 두 종류
// 전체 지도는 두장을 겹쳐서 얻을 수 있음
// 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
// 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1,
// 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

// 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력하라.

// 1 <= N <= 16
// arr1, arr2는 길이 n인 정수 배열
// 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다.

function solution(n, arr1, arr2) {
  let array1 = [];
  let array2 = [];
  let result = [];
  let answer = [];
  for (let i = 0; i < n; i++) {
    arr1[i].toString(2).length < n
      ? array1.push(
          new Array(n - arr1[i].toString(2).length + 1).join("0") +
            arr1[i].toString(2)
        )
      : array1.push(arr1[i].toString(2));

    arr2[i].toString(2).length < n
      ? array2.push(
          new Array(n - arr2[i].toString(2).length + 1).join("0") +
            arr2[i].toString(2)
        )
      : array2.push(arr2[i].toString(2));
  }
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      if (array1[i][j] === "0" && array2[i][j] === "0") {
        result[i].push(" ");
      } else {
        result[i].push("#");
      }
    }
    answer.push(result[i].join(""));
  }
  return answer;
}

//console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

// OR 연산자 |
// 두 비트 중 하나라도 1이면 1, 두 비트가 모드 0일때만 0 반환
function solution2(n, arr1, arr2) {
  return arr1.map((v, i) => {
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    );
  });
}
const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

console.log(solution2(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

var solution3 = (n, arr1, arr2) =>
  arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
