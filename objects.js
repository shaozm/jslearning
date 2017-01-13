var obj01 = Object.create(null);
var obj02 = Object.create(Object.prototype);
var obj02e = {}; // equivalent to obj02
var obj02d = Object.create(Object);
var obj04 = function () {};
var obj04e = Object.create(Function.prototype);
var obj04d = Object.create(Function);

/*
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

/*
if not declared, the parent is Object
*/
var person = {
  firstName:"John",
  lastName:"Doe",
  age:50,
  eyeColor:"blue",
  fullName() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
console.log(Object.getPrototypeOf(person)); // [object Object] or {}
//console.log(Object.getPrototypeOf(person.prototype));
//TypeError: Cannot convert undefined or null to object

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName(){
    return this.firstName + " " + this.lastName;
  }
}
var p = new Person("Amelia", "Shao", 2);
console.log(p.fullName() + " " + p.age);
/* OK */
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}
var square = new Polygon(10, 20);
console.log(square.width);
