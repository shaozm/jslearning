/*
1. Object
- object literal, person1
- consturctor functions, Person -> person2
*/
var person1 = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};
function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function(){
    return this.firstName + " " + this.lastName;
  };
  /*
  this.setFirstName = fucntion(newFirstName){
    this.firstName = newFirstName
  }
  */
}
var person2 = new Person("John", "Doe", 50);

console.log("--- person1 ---");
console.log(person1.fullName());
console.log(Object.getPrototypeOf(person1)); // {}; not [object Object]
console.log(eval(person1));
console.log("--- person2 ---");
console.log(person2.fullName());
console.log(Object.getPrototypeOf(person2)); //Person {}
console.log(eval(person2));
console.log("--- person3 ---");
var person3 = Object.create(person2);
console.log(person3.fullName());
console.log(Object.getPrototypeOf(person3));
console.log(eval(person3));

/* person2
Person {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  fullName: [Function] }
*/


//console.log(Object.getPrototypeOf(person1.prototype)); //TypeError: Cannot convert undefined or null to object


/*
var obj01 = Object.create(null);
var obj02 = Object.create(Object.prototype);
var obj02e = {}; // equivalent to obj02
var obj02d = Object.create(Object);
var obj04 = function () {};
var obj04e = Object.create(Function.prototype);
var obj04d = Object.create(Function);

console.log(obj01.__proto__); //	undefined
console.log(Object.getPrototypeOf(obj01)); // null
console.log(obj02.__proto__); //	{}
console.log(Object.getPrototypeOf(obj02), Object.getPrototypeOf(obj02e)); // {}
console.log(Object.getPrototypeOf(obj02d)); //[Function: Object]
console.log(Object.getPrototypeOf(obj04), Object.getPrototypeOf(obj04e)); // [Function]
console.log(Object.getPrototypeOf(obj04d)); //[Function: Function]
console.log(Object.getPrototypeOf(msg), Object.getPrototypeOf("foo"));	// [String:'']

console.log(Object.getPrototypeOf(Object.prototype)); // null
console.log(Object.getPrototypeOf(Function.prototype)); // {}
*/
