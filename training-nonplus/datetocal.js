function solution(a, b) {
  var answer = "";
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  answer = week[new Date(`2016-${a}-${b}`).getDay()];
  return answer;
}
solution(1, 1);

solution(5, 24);

function getDayName(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

console.log(getDayName(5, 24));
