// 주어진 숫자중 3개의 수를 더했을 때, 소수가 되는 경우의 개수를 구하자
// nums: 숫자들이 들어있는 배열
// nums중 3개를 골라 소수가 되는 경우의 개수를 return
// nums 길이 : 3개 이상 50개 이하
// nums 원소 : 1이상 1000이하, 중복 없음
function isPrime(num) {
  if (num < 2) {
    // 음수와 1은 소수가 아니다
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  var answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) {
          answer++;
        }
      }
    }
  }
  return answer;
}

//console.log(solution([1, 2, 3, 4]));
console.log(solution([1, 2, 7, 6, 4]));
