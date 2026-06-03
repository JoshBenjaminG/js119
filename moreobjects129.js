// ============================================================
// FOUNDATIONAL PROBLEMS
// ============================================================

// Name the Constructor
console.log("Hello".constructor.name);          // String
console.log([1,2,3].constructor.name);          // Array
console.log({name: 'Srdjan'}.constructor.name); // Object

// Create the Class / Instance / What are you?
class Cat {
  constructor() {
    console.log('I\'m a cat!');
  }
}
let kitty = new Cat();

// Hello Sophie parts 1 & 2
class Cat {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello! My name is ${this.name}`);
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

// Rectangles and Squares
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getWidth() { return this.width; }
  getLength() { return this.length; }
  getArea() { return this.width * this.length; }
}
class Square extends Rectangle {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
}

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
  constructor(make, model) { super(make, model); }
  getWheels() { return 4; }
}
class Motorcycle extends Vehicle {
  constructor(make, model) { super(make, model); }
  getWheels() { return 2; }
}
class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model);
    this.payload = payload;
  }
  getWheels() { return 6; }
}

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

// Moving
const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}
class Person {
  constructor(name) { this.name = name; }
  gait() { return "strolls"; }
}
class Cat {
  constructor(name) { this.name = name; }
  gait() { return "saunters"; }
}
class Cheetah {
  constructor(name) { this.name = name; }
  gait() { return "runs"; }
}
Object.assign(Person.prototype, walkMixin);
Object.assign(Cat.prototype, walkMixin);
Object.assign(Cheetah.prototype, walkMixin);

// Buggy Code 1 - fix: missing this. on properties
function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${name}`;
          break;
      }
      console.log(msg);
    },
  };
}

// Buggy Code 2 - fix: don't mutate this.price
let item = {
  name: 'Foo',
  price: 50,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

// The Franchise - self pattern
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  }
};

// The Franchise - bind pattern
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
    }.bind(this));
  }
};

// myFilter
function myFilter(array, func, thisArg) {
  let result = [];
  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });
  return result;
}

// Classical Object Creation
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
}
Person.prototype.communicate = function() { console.log('Communicating'); }
Person.prototype.eat = function() { console.log('Eating'); }
Person.prototype.sleep = function() { console.log('Sleeping'); }

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() { console.log('Diagnosing'); }

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() { console.log('Studying'); }

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}
GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() { console.log('Researching'); }

// ============================================================
// ADVANCED PROBLEMS
// ============================================================

// Pet Shelter
class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}
class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  numberOfPets() {
    return this.pets.length;
  }
}
class Shelter {
  constructor() {
    this.adoptions = {};
  }
  adopt(owner, pet) {
    if (!this.adoptions[owner.name]) {
      this.adoptions[owner.name] = [];
    }
    this.adoptions[owner.name].push(pet);
    owner.pets.push(pet);
  }
  printAdoptions() {
    Object.entries(this.adoptions).forEach(([ownerName, pets]) => {
      console.log(`${ownerName} has adopted the following pets:`);
      pets.forEach(pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
    });
  }
}

// Library System
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class Member {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  numberOfBooks() {
    return this.books.length;
  }
}
class Library {
  constructor() {
    this.inventory = [];
    this.checkouts = {};
  }
  addBook(book) {
    if (!this.inventory.includes(book)) {
      this.inventory.push(book);
    }
  }
  checkOut(member, book) {
    if (!this.checkouts[member.name]) {
      this.checkouts[member.name] = [];
    }
    this.checkouts[member.name].push(book);
    member.books.push(book);
  }
  printCheckouts() {
    Object.entries(this.checkouts).forEach(([member, books]) => {
      console.log(`${member} has checked out:`);
      books.forEach(book => {
        console.log(`${book.title} by ${book.author}`);
      });
    });
  }
}

// Testing Object Equality
function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  return keys1.every(key => {
    return keys2.includes(key) && obj1[key] === obj2[key];
  });
}

// Banner Class
class Banner {
  constructor(message) {
    this.message = message;
  }
  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }
  horizontalRule() {
    return `+${'-'.repeat(this.message.length + 2)}+`;
  }
  emptyLine() {
    return `|${' '.repeat(this.message.length + 2)}|`;
  }
  messageLine() {
    return `| ${this.message} |`;
  }
}

////////////////////

// A circular buffer has a fixed size. When full, adding a new item
// replaces the oldest item in the buffer.
// 
// Implement a CircularBuffer class with:
// - constructor that accepts a buffer size
// - put(item) adds an item to the buffer
//   if full, overwrites the oldest item
// - get() removes and returns the oldest item
//   returns null if buffer is empty

class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.items = [];
  }
  
  get() {
    if(this.items.length === 0) return null;
    return this.items.shift();
  }
  
  put(item) {
    if(this.items.length === this.size) {
      this.items.shift();
      this.items.push(item);
    } else {
        this.items.push(item);
    }
  }
}

// Check if the buffer is full
// If full, remove the oldest item first
// Then add the new item

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);  // true
buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);     // true
buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);     // true
buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);     // true
console.log(buffer.get() === 6);     // true
console.log(buffer.get() === 7);     // true
console.log(buffer.get() === null);  // true