// 사용하는 언어와, 언어선호도를 입력하면 직업군을 추천해주는 알고리즘
// tables : 직업군 언어 점수, 문자열 배열
// languages : 개발자가 사용하는 언어, 문자열 배열
// preference : 언어 선호도, 정수 배열
// 개발자가 사용하는 언어의 언어선호도x직업군언어점수 의 총합이 높은 직업군을 return
// 총합이 동일할 경우 사전 순으로 가장 빠른 직업군 return
// table.length = 5 "직업군 5점언어 4점언어 3점언어 2점언어 1점언어"형식의 문자열
// 1 <= languages.length <= 9
// languages : "JAVA", "JAVASCRIPT", "C", "C++" ,"C#" , "SQL", "PYTHON", "KOTLIN", "PHP" 중 한 개 이상
// preference.length = languages.length
//
function solution(table, languages, preference) {
  return table //
    .map((r) => r.split(" "))
    .map((t) => [...t.splice(0, 1), t])
    .map(([t, arr]) => [
      t,
      languages.reduce((acc, l, i) => {
        acc +=
          (5 - (arr.indexOf(l) === -1 ? 5 : arr.indexOf(l))) * preference[i];
      }, 0),
    ])
    .sort((a, b) => b[1] - a[1] - (a[0] < b[0]))[0][0];
}

// console.log(
//   solution(
//     [
//       "SI JAVA JAVASCRIPT SQL PYTHON C#",
//       "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
//       "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
//       "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
//       "GAME C++ C# JAVASCRIPT C JAVA",
//     ],
//     ["PYTHON", "C++", "SQL"],
//     [7, 5, 5]
//   )
// );

console.log(
  solution(
    [
      "SI JAVA JAVASCRIPT SQL PYTHON C#",
      "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
      "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
      "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
      "GAME C++ C# JAVASCRIPT C JAVA",
    ],
    ["JAVA", "JAVASCRIPT"],
    [7, 5]
  )
);
