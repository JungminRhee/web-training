// function sumOf(x,y){
//     let total = 0;
//     for (var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sumOf(1));
// console.log(sumOf(1,2));
// console.log(sumOf(1,2,3));
// console.log(sumOf(1,2,3,4));
// console.log(sumOf(1,2,3,4,5));

// function factoial(x){
//     if (x<=1){
//         return 1;
//     } else {
//         return x+arguments.callee(x-1);
//     }
// }
// console.log(factoial(10));

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//         console.log(this.name[0] + ' ' +this.name[1] + ' is ' +this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] +'.');
//     },
//     greeting: function() {
//         console.log('Hi! I\'m ' + this.name[0] + '.');
//     }
// };

// person['eyes'] = 'hazel';
// person['eyes'];
// person.bio();
// person.greeting();
// console.log(person);

// var myDataName = 'height';
// var myDataValue = '1.75m';
// person[myDataName] = myDataValue;

// console.log(person.height);

// function Person(name) {
//     this.name = name;
//     this.greeting = function(){
//         console.log('Hi! I\'m ' + this.name + '.');
//     };
// }

// var person1 = new Person('Bob');
// person1.greeting();

