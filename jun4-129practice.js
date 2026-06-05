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

// Hello Chloe
class Cat {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}

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

// Swimming
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  }
}
class Fish {
  constructor(name) { this.name = name; }
}
class Dog {
  constructor(name) { this.name = name; }
}
class Maltese extends Dog {}
Object.assign(Fish.prototype, swimMixin);
Object.assign(Dog.prototype, swimMixin);

// Towable
const towMixin = {
  tow() {
    return "I can tow a trailer!";
  }
}
class Vehicle {
  constructor(year) { this.year = year; }
}
class Truck extends Vehicle {}
class Car extends Vehicle {}
Object.assign(Truck.prototype, towMixin);

// Rectangles
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }
  getWidth() { return this.width; }
  getLength() { return this.length; }
  getArea() { return this.width * this.length; }
}

// Rectangles and Squares
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
  constructor(name) { this.name = name; }
  speaks() { return `${this.name} says meowwww.`; }
}
let fakeCat = Object.create(Cat.prototype);

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
  info() { return `${this.make} ${this.model}`; }
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

// What Will This Do?
class Something {
  constructor() { this.data = "Hello"; }
  dupData() { return this.data + this.data; }
  static dupData() { return "ByeBye"; }
}
// Something.dupData() → "ByeBye"
// new Something().dupData() → "HelloHello"

// Shouter
class Person {
  greeting(text) { console.log(text); }
}
class Shouter extends Person {
  greeting(text) { super.greeting(text.toUpperCase()); }
}

// Moving
const walkMixin = {
  walk() { return `${this.name} ${this.gait()} forward`; }
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

// Buggy Code 1 — fix: missing this. on properties
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

// Buggy Code 2 — fix: don't mutate this.price
let item = {
  name: 'Foo',
  price: 50,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    return this.price - discount;
  },
};

// What is This? — this at object literal level = outer context
let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName() {
    return this.firstName + this.lastName;
  }
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

// Ancestors
Object.prototype.ancestors = function() {
  let result = [];
  let current = Object.getPrototypeOf(this);
  while (current !== null) {
    if (current === Object.prototype) {
      result.push('Object.prototype');
    } else {
      result.push(current.name);
    }
    current = Object.getPrototypeOf(current);
  }
  return result;
};

// Classical Object Creation
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}
Person.prototype.fullName = function() { console.log(`${this.firstName} ${this.lastName}`); }
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
  numberOfPets() { return this.pets.length; }
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
  numberOfBooks() { return this.books.length; }
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
  horizontalRule() { return `+${'-'.repeat(this.message.length + 2)}+`; }
  emptyLine() { return `|${' '.repeat(this.message.length + 2)}|`; }
  messageLine() { return `| ${this.message} |`; }
}

// Student / School
class Student {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.courses = [];
  }
  info() { console.log(`${this.name} is a ${this.year} year student`); }
  addCourse(course) { this.courses.push(course); }
  listCourses() { return this.courses; }
  addNote(code, note) {
    let course = this.courses.find(course => course.code === code);
    if (course.note) {
      course.note += `; ${note}`;
    } else {
      course.note = `${note}`;
    }
  }
  updateNote(code, note) {
    let course = this.courses.find(course => course.code === code);
    course.note = `${note}`;
  }
  viewNotes() {
    this.courses.forEach(course => {
      if (course.note) console.log(`${course.name}: ${course.note}`);
    });
  }
}

let school = {
  students: [],
  addStudent(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    if (!validYears.includes(year)) {
      console.log('Invalid Year');
      return;
    } else {
      let student = new Student(name, year);
      this.students.push(student);
      return student;
    }
  },
  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },
  addGrade(student, courseName, grade) {
    let course = student.courses.find(course => course.name === courseName);
    course.grade = grade;
  },
  getReportCard(student) {
    student.courses.forEach(course => {
      if (!course.grade) {
        console.log(`${course.name}: In progress`);
      } else {
        console.log(`${course.name}: ${course.grade}`);
      }
    });
  },
  courseReport(courseName) {
    let studentsWithGrades = this.students.filter(student => {
      let course = student.courses.find(c => c.name === courseName);
      return course && course.grade;
    });
    if (studentsWithGrades.length === 0) return undefined;
    console.log(`=${courseName} Grades=`);
    let grades = studentsWithGrades.map(student => {
      let course = student.courses.find(c => c.name === courseName);
      console.log(`${student.name}: ${course.grade}`);
      return course.grade;
    });
    let average = grades.reduce((a, n) => a + n, 0) / grades.length;
    console.log('---');
    console.log(`Course Average: ${average}`);
  }
};

// Circular Buffer
class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.items = [];
  }
  get() {
    if (this.items.length === 0) return null;
    return this.items.shift();
  }
  put(item) {
    if (this.items.length === this.size) {
      this.items.shift();
    }
    this.items.push(item);
  }
}

// ============================================================
// PLAYGROUND PROBLEMS
// ============================================================

// Book / Ebook / Mixin
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  summary() { return `${this.title} by ${this.author}, ${this.pages} pages`; }
  isLong() { return this.pages > 300; }
  static genre() { console.log('Books can belong to many genres'); }
}
class Ebook extends Book {
  constructor(title, author, pages, fileSize) {
    super(title, author, pages);
    this.fileSize = fileSize;
  }
  summary() { return `${super.summary()}, ${this.fileSize}MB`; }
}
const downloadMixin = { download() { return `${this.title} is downloading...`; } }
const printMixin = { print() { return `${this.title} is printing...`; } }
Object.assign(Book.prototype, printMixin);
Object.assign(Ebook.prototype, downloadMixin);

// Vehicle / Car / Motorcycle / Truck / flyMixin
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  describe() { return `This is a ${this.year} ${this.make} ${this.model}`; }
  startEngine() { return 'Vroom!'; }
  static category() { console.log('Vehicles are modes of transport'); }
  static compare(vehicle1, vehicle2) {
    if (vehicle1.year > vehicle2.year) {
      console.log(`${vehicle1.make} ${vehicle1.model} is newer`);
    } else if (vehicle1.year < vehicle2.year) {
      console.log(`${vehicle2.make} ${vehicle2.model} is newer`);
    } else {
      console.log('Same year!');
    }
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
  describe() { return `${super.describe()}, ${this.numDoors} doors`; }
}
class Motorcycle extends Vehicle {
  constructor(make, model, year) { super(make, model, year); }
  startEngine() { return 'Putt putt!'; }
}
class Truck extends Vehicle {
  constructor(make, model, year, payloadCapacity) {
    super(make, model, year);
    this.payloadCapacity = payloadCapacity;
  }
  describe() { return `${super.describe()}, payload: ${this.payloadCapacity} tons`; }
}
const flyMixin = { fly() { return `${this.make} ${this.model} is flying!`; } }
Object.assign(Car.prototype, flyMixin);
Object.assign(Truck.prototype, flyMixin);

// this binding playground
let person = {
  name: 'Alice',
  greet() { return `Hi I'm ${this.name}`; }
};
console.log(person.greet());          // Hi I'm Alice
let test = person.greet;
console.log(test());                  // TypeError (strict)
let boundGreet = person.greet.bind(person);
console.log(boundGreet());            // Hi I'm Alice
person.arrowGreet = () => `Hi I'm ${this.name}`;
console.log(person.arrowGreet());     // Hi I'm undefined

// Timer — three fixes for lost this in setInterval
const Timer = {
  seconds: 0,
  // Fix 1: self
  start() {
    let self = this;
    setInterval(function() {
      self.seconds++;
      console.log(self.seconds);
    }, 1000);
  },
  // Fix 2: bind
  start() {
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this), 1000);
  },
  // Fix 3: arrow
  start() {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  }
};

// Arrow function syntax drills
let double = n => n * 2;
let greet = name => `Hello ${name}`;
[1, 2, 3].map(n => n * 2);
[1, 2, 3].filter(n => n > 1);
let add = (a, b) => a + b;
[1, 2, 3].forEach(n => console.log(n));