// 단 한명의 선수를 제외하고 모든 선수가 마라톤을 완주
// 참가한 선수들의 이름 배열 : participant
// 완주한 선수들의 이름 배열 : completion
// 완주하지 못한 선수의 이름을 return

// 선수의 수는 1명 이상 100,000명 이하
// partcipant.length = completion.length - 1
// 참가자의 이름은 1개 이상, 20개 이하의 알파벳 소문자로 이루어져 있음
// 참가자 중에는 동명이인이 있을 수 있음

function solution(participant, completion) {
  // 해시처럼 쓰기 위해, 동명이인의 경우 acc[c(ount)] + 1를 해준다.
  // (이름[횟수]) completion 끝까지 name: count 로 추가되어 객체가 리턴됨
  let newList = completion.reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1;
    return acc;
  }, {});
  return participant.find((c) => {
    // newList[c] 값이 0 이면 false! 그래서 바로 해당값 return
    // 동명이인을 제거해주기 위해 newList[c] 값을 찾을때마다 계속 -1 로 줄여나간다.
    if (newList[c]) {
      console.log(newList, c, newList[c]);
      newList[c] -= 1;
      console.log(newList, c, newList[c]);
    } else {
      return true;
    }
  });
}

// solution(["kiki", "eden", "eden", "leo"], ["eden", "kiki", "eden"]);

// solution(
//   ["marina", "josipa", "nikola", "vinko", "filipa"],
//   ["josipa", "filipa", "marina", "nikola"]
// );
console.log(
  solution(
    ["mislav", "stanko", "mislav", "ana", "mislav"],
    ["stanko", "ana", "mislav", "mislav"]
  )
);
