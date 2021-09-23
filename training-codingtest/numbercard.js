function solution(s) {
  return Number(
    s //
      .replace(/zero/gi, "0")
      .replace(/one/gi, "1")
      .replace(/two/gi, "2")
      .replace(/three/gi, "3")
      .replace(/four/gi, "4")
      .replace(/five/gi, "5")
      .replace(/six/gi, "6")
      .replace(/seven/gi, "7")
      .replace(/eight/gi, "8")
      .replace(/nine/gi, "9")
  );
}

// 정규식 말고 깔끔하게 하는법
function solution2(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  // 숫자를 인덱스를 활용해야겠다!! 까지 생각하고 그 이후 아이디어가 생각 안난게 아쉽다 ㅠ
  for (let i = 0; i < numbers.length; i++) {
    // numbers.length로 체크하는 이유: 0부터 9까지 문자로 된걸 다 봐야되니깐
    let arr = answer.split(numbers[i]); // numbers[i] 기준으로 만약 one 이라면 걔를 기준으로 one빼고 문자열을 쪼갬
    console.log(`i: ${i}, arr: ${arr}, answer: ${answer}`);
    answer = arr.join(i); // one 대신 1을 인수로 넣어서 합치기! 그럼 one -> 1로 바뀐다.
    console.log(answer);
  }

  return Number(answer);
}
console.log(solution2("one4seveneight"));
console.log(solution2("2three45sixseven"));
console.log(solution2("23four5six7"));
console.log(solution2("123"));
console.log(solution2("oneoneoneone")); // 이 경우에는 one이 i = 1일때 한번에 다 바뀌지만 i=9까지 끝까지 체크~
