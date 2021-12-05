var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

var rhee = {
  name: "rhee",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second)", kim.sum());
console.log("rhee.sum(rhee.first, rhee.second)", rhee.sum());
