console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random());
console.log("Math.floor(3.9)", Math.floor(3.9));

var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(4.2)", MyMath.floor(4.2));

const headphone = (function () {
  let volume = 0;

  return {
    volumeUp: function () {
      if (volume < 10) {
        volume++;
      }
    },
    volumeDown: function () {
      if (volume > 0) {
        volume--;
      }
    },
  };
})();

const headphone = {
  volume: 0,
  volumeUp: function () {
    if (this.volume < 10) {
      this.volume++;
    }
  },
  volumeDown: function () {
    if (this.volume > 0) {
      this.volume--;
    }
  },
};
