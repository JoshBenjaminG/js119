// ============================================================
// Snippet 1 — Lost this context
// ============================================================
let person = {
  name: 'Jane',
  printName() {
    console.log(`My name is ${this.name}.`);
  }
};

const logName = person.printName;
logName();
// this is lost — logName is called as a standalone function
// non-strict: logs "My name is undefined."
// strict (CoderPad): TypeError — this is undefined

// Fix using bind:
const logName = person.printName.bind(person);
logName(); // My name is Jane.

// ============================================================
// Snippet 2 — Arrow function and this
// ============================================================
let name = 'Anna';
let printName = () => console.log(this.name);

let person = { name: 'Nina', printName };
person.printName();
// logs undefined — arrow function locks this at definition time (global scope)
// dot notation does not change this for arrow functions
// call/apply/bind cannot override arrow function this either

// ============================================================
// Snippet 3 — Constructor function and new
// ============================================================
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log('Woof');
};

let fido = new Dog('Fido');
fido.bark();                    // Woof
console.log(fido instanceof Dog); // true

// new does four things:
// 1. creates a new empty object
// 2. sets its prototype to Dog.prototype
// 3. runs constructor with this = new object
// 4. returns the object automatically

// fido.bark() works through prototype chain —
// JavaScript looks on fido first, doesn't find bark,
// climbs to Dog.prototype and finds it there

// ============================================================
// Snippet 4 — Instance vs static methods
// ============================================================
class Cat {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} says meow!`;  // instance method
  }
  static about() {
    return 'Cats are awesome!!!';      // static method
  }
}

let kitty = new Cat('Kitty');
kitty.speak();    // works — instance method called on instance
Cat.about();      // works — static method called on class
kitty.about();    // TypeError — static not available on instances

// Old style equivalent of static:
Cat.about = function() { return 'Cats are awesome!!!'; };
// assigned directly to Cat, not Cat.prototype

// ============================================================
// Snippet 5 — Constructor/prototype pattern
// ============================================================
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.introduce = function() {
  return `This is a ${this.year} ${this.brand} ${this.model}`;
};

let car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.introduce()); // This is a 2020 Toyota Camry
console.log(car1 instanceof Car); // true

// Advantages over factory functions:
// 1. Memory efficient — introduce lives on prototype, shared across instances
// 2. instanceof works correctly
// 3. new handles return automatically

// Without new:
// strict mode: this is undefined — TypeError on first property assignment
// car1 = undefined — calling methods on it throws TypeError

// ============================================================
// Snippet 6 — Prototype-based inheritance
// ============================================================
function Animal(name) { this.name = name; }
Animal.prototype.speak = function() { return `${this.name} makes a noise.`; };

function Dog(name) {
  Animal.call(this, name);                       // equivalent to super(name)
}
Dog.prototype = Object.create(Animal.prototype); // equivalent to extends Animal
Dog.prototype.bark = function() { return `${this.name} barks.`; };

let dog = new Dog('Rex');
console.log(dog.speak());           // Rex makes a noise.
console.log(dog.bark());            // Rex barks.
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog);    // true

// Animal.call(this, name) — runs Animal's constructor on the new Dog instance
// Without it: name is never set on Dog instances
// Object.create(Animal.prototype) — sets up prototype chain
// Without it: instanceof Animal = false, speak() inaccessible

// ============================================================
// Snippet 7 — Mixins
// ============================================================
const swimMixin = {
  swim() { return `${this.name} is swimming!`; }
};

class Animal { constructor(name) { this.name = name; } }
class Dog extends Animal {}
class Fish extends Animal {}

Object.assign(Dog.prototype, swimMixin);
Object.assign(Fish.prototype, swimMixin);

let dog = new Dog('Rex');
let fish = new Fish('Nemo');
console.log(dog.swim());  // Rex is swimming!
console.log(fish.swim()); // Nemo is swimming!

// swim not on Animal because not all animals swim
// mixin centralizes behavior — change once, all classes get the update
// Dog and Fish don't need constructors — Animal's runs automatically via extends

// ============================================================
// Snippet 8 — Polymorphism
// ============================================================
class Animal { speak() { return `${this.name} makes a noise.`; } }
class Dog extends Animal { speak() { return `${this.name} barks.`; } }
class Cat extends Animal { speak() { return `${this.name} meows.`; } }

let animals = [new Dog('Rex'), new Cat('Whiskers')];
animals.forEach(animal => console.log(animal.speak()));
// Rex barks.
// Whiskers meows.

// Polymorphism — same interface (speak()), different behavior per object type
// forEach callback uses arrow function — no this involved so no context issue

// ============================================================
// Snippet 9 — Lost this in callbacks (The Franchise)
// ============================================================
let franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number; // this is lost
    });
  }
};
// logs ['undefined 1', 'undefined 2', 'undefined 3']

// Fix 1 — arrow function
allMovies() {
  return [1, 2, 3].map(number => this.name + ' ' + number);
}

// Fix 2 — self pattern
allMovies() {
  let self = this;
  return [1, 2, 3].map(function(number) { return self.name + ' ' + number; });
}

// Fix 3 — bind
allMovies() {
  return [1, 2, 3].map(function(number) {
    return this.name + ' ' + number;
  }.bind(this));
}