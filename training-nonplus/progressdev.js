// function solution(progresses, speeds) {
//   const progress = new String(progresses) //
//     .split(",")
//     .map((item) => parseInt(item, 10));
//   const speed = new String(speeds) //
//     .split(",")
//     .map((item) => parseInt(item, 10));
//   console.log(progress, speed);

//   let cnt = 0;
//   let result = [];
//   let task = progress.length;

//   for (let i = 0; i < task; i++) {
//     console.log(`progress: ${progress}, speed: ${speed}`);
//     let work = speed.pop();
//     for (let check = progress.pop(); check < 100 && work > 0; ) {
//       check = check + work;
//       cnt++;
//       console.log(check, cnt);
//     }
//     result.push(cnt);
//     cnt = 0;
//   }

//   result.reverse();
//   for (let j = 0; j < result.length; j++) {
//     if (result[j] < result[j + 1]) {
//       continue;
//     } else {
//       cnt++;
//     }
//     console.log(`cnt: ${cnt}`);
//   }

//   return result;
// }

function solution(progresses, speeds) {
  let answer = [];
  let beforCommitDay = 0;
  progresses.map((a, index) => {
    //개발이 얼마나 걸리는지 확인
    let day = Math.ceil((100 - a) / speeds[index]);
    // Math.ceil()주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환
    // 올림!
    if (day > beforCommitDay) {
      // 이전 배포보다 느릴경우
      answer.push(1);
      beforCommitDay = day;
    } else {
      // 이전 배포보다 빠를경우
      answer[answer.length - 1]++; // 이전 배포와 같이 배포될 수 있도록 기다려야 하므로 이전 배포단계에서 ++를 카운트
    }
  });
  return answer;
}
console.log(solution([93, 30, 55], [1, 30, 5]));

//console.log(solution("95, 90, 99, 99, 80, 99", "1, 1, 1, 1, 1, 1"));
