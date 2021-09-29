// 단어 s의 가운데 글자를 반환하자
// 단어의 길이가 짝수라면 가운데 두글자를 반환

function solution(s) {
  return s.length % 2 === 1
    ? s.slice(s.length / 2, s.length / 2 + 1)
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}

console.log(solution("abcde"));
console.log(solution("qwer"));

function solution2(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
