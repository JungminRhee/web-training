function Person(first, last, age, gender, interests) {
  this.name = {
    first: first,
    last: last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function (gender) {
    if (gender === "male") {
      alert(
        this.name.first +
          " " +
          this.name.last +
          " is " +
          this.age +
          " years old. He likes " +
          this.interests[0] +
          " and " +
          this.interests[1] +
          "."
      );
    } else {
      alert(
        this.name.first +
          " " +
          this.name.last +
          " is " +
          this.age +
          " years old. She likes " +
          this.interests[0] +
          " and " +
          this.interests[1] +
          "."
      );
    }
  };
  this.greeting = function () {
    alert("Hi! I'm " + this.name.first + ".");
  };
}

var person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
person1["age"];
person1.interests[1];
person1.bio("mail");
