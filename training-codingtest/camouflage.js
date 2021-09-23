// 스파이들은 매일 다른 옷을 조합하여 입고 자신을 위장해야함
// 스파이가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때,
// 서로 다른 옷의 조합의 수를 return

// clothes = [[ 의상 이름 : 의상 종류 ]]
// 같은 이름을 가진 의상은 존재 X
// 의상의 수는 1개 이상 30개 이하
// clothes -> 모든 원소는 문자열로 존재
// 모든 문자열의 길이 : 1 이상 20이하인 자연수. 알파벳 소문자 또는 '_'로만 구성
// 스파이는 최소한 한개의 의상은 입음

function solution(clothes) {
  return (
    Object.values(
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        console.log(obj, t);
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
);
//solution([["crowmask", "face"], ["bluesunglasses", "face"], ["smoky_makeup", "face"]]);
