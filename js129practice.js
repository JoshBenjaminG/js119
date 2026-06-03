// ============================================================
// FOUNDATIONAL PROBLEMS
// ============================================================

// Name the Constructor
console.log("Hello".constructor.name);   // String
console.log([1,2,3].constructor.name);   // Array
console.log({name: 'Srdjan'}.constructor.name); // Object

// Create the Class / Create an Instance / What are you?
class Cat {
  constructor() {
    console.log('I\'m a cat!')
  }
}
let kitty = new Cat();

// Hello Sophie parts 1 & 2
class Cat {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! My name is ${this.name}`)
  }
}
let kitty = new Cat('Sophie');
kitty.greet();

// Default Person
class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}
let person1 = new Person('Sophie');
let person2 = new Person();

// Hello Chloe
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}
let kitty = new Cat('Sophie');
kitty.rename('Chloe');

// Generic Greeting parts 1 & 2
class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log('Hello! I\'m a cat!');
  }
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}
Cat.genericGreeting();
let kitty = new Cat('Sophie');
kitty.personalGreeting();

// Inherited Year
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {}
class Car extends Vehicle {}
let truck = new Truck(2003);
let car = new Car(2015);

// Start the Engine part 1
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }
  startEngine() {
    console.log('Ready to go!');
  }
}
let truck = new Truck(2003);

// Only Pass the Year
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}
class Car extends Vehicle {}
let truck1 = new Truck(2003, 'Short');

// Start the Engine part 2
class Vehicle {
  startEngine() {
    return 'Ready to go!';
  }
}
class Truck extends Vehicle {
  startEngine(speed) {
    return `${super.startEngine()} You are driving ${speed}`;
  }
}
let truck1 = new Truck();
let truck2 = new Truck();
console.log(truck1.startEngine('fast'));
console.log(truck2.startEngine('slow'));

// Walk the Cat
const walkMixin = {
  walk() {
    return "Let's go for a walk!";
  }
};
class Cat {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}
Object.assign(Cat.prototype, walkMixin);
let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

// Swimming
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}
class Fish {
  constructor(name) {
    this.name = name;
  }
}
class Dog {
  constructor(name) {
    this.name = name;
  }
}
class Maltese extends Dog {}
Object.assign(Fish.prototype, swimMixin);
Object.assign(Dog.prototype, swimMixin);
let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

// Towable parts 1 & 2
const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {}
class Car extends Vehicle {}
Object.assign(Truck.prototype, towMixin);
let truck = new Truck(2002);

// Rectangles
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getWidth() {
    return this.width;
  }
  getLength() {
    return this.length;
  }
  getArea() {
    return this.width * this.length;
  }
}

// Rectangles and Squares
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}
let square = new Square(5);

// ============================================================
// INTERMEDIATE PROBLEMS
// ============================================================

// Fake Cat
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}
let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // true
console.log(fakeCat.name);           // undefined
console.log(fakeCat.speaks());       // undefined says meowwww.

// Complete the Program - Cats!
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Cat extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  info() {
    return `${this.name} is a cat. They are ${this.age} years old and ${this.color}.`
  }
}
let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

// Animals
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}
class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }
  introduce() {
    return `${super.introduce()} Meow meow!`;
  }
}
class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

// Refactoring Vehicles
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  info() {
    return `${this.make} ${this.model}`;
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }
  getWheels() {
    return 4;
  }
}
class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }
  getWheels() {
    return 2;
  }
}
class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
  getWheels() {
    return 6;
  }
}

// What Will This Do?
class Something {
  constructor() {
    this.data = "Hello";
  }
  dupData() {
    return this.data + this.data;
  }
  static dupData() {
    return "ByeBye";
  }
}
let thing = new Something();
console.log(Something.dupData()); // ByeBye
console.log(thing.dupData());     // HelloHello

// Shouter
class Person {
  greeting(text) {
    console.log(text);
  }
}
class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}
let person = new Person();
let shouter = new Shouter();
person.greeting("Hello. It's very nice to meet you.");
shouter.greeting("Hello my friend.");

// Moving
const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`
  }
}
class Person {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "strolls";
  }
}
class Cat {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "saunters";
  }
}
class Cheetah {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "runs";
  }
}
Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

// Buggy Code 1
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':x