// 클래스는 재조립 가능하도록 만들어야 좋음 (재사용 가능하도록)
// 클래스 내부에서 자체적으로 컨트롤해버리면, 재사용이 불가능하기 때문에
// 그래서 콜백 함수를 쓰는것.
// 원할때 기능을 전달하게 되면 수행이될 수 있도록 클래스 내부에서 정의하지 않음.
// 아래처럼 생성자에서 바로 콜백함수를 부를 수 있다.
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter); // 콜백이 undefind가 아닐 경우 실행되겠지요?
    }
  }
}

function printSometing(num) {
  console.log(`Wow! ${num}`);
}

function alertNum(num) {
  alert(`Alert! ${num}`);
}
const printCounter = new Counter(printSometing);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
// alertCounter.increase();
// alertCounter.increase();
// alertCounter.increase();
// alertCounter.increase();
// alertCounter.increase();
