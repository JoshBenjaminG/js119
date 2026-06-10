// Question 1: Prototype shadowing

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog = new Dog('Rex');

dog.bark = function() {
  console.log(`${this.name} yips.`);
};

dog.bark();

console.log(dog.hasOwnProperty('bark'));
console.log(Dog.prototype.hasOwnProperty('bark'));


// Question 2: Deleting an own method reveals prototype method

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog = new Dog('Rex');

dog.bark = function() {
  console.log(`${this.name} yips.`);
};

delete dog.bark;

dog.bark();

console.log(dog.hasOwnProperty('bark'));
console.log(Dog.prototype.hasOwnProperty('bark'));


// Question 3: Own property vs prototype property

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog = new Dog('Rex');

console.log(dog.hasOwnProperty('name'));
console.log(Dog.prototype.hasOwnProperty('name'));
console.log(dog.name);
console.log(dog instanceof Dog);


// Question 4: Shared prototype method

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog1 = new Dog('Rex');
let dog2 = new Dog('Maya');

console.log(dog1.bark === dog2.bark);

dog1.bark();
dog2.bark();

console.log(dog1.hasOwnProperty('bark'));
console.log(dog2.hasOwnProperty('bark'));


// Question 5: One instance shadows a shared method

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog1 = new Dog('Rex');
let dog2 = new Dog('Maya');

dog1.bark = function() {
  console.log(`${this.name} yips.`);
};

console.log(dog1.bark === dog2.bark);

dog1.bark();
dog2.bark();

console.log(dog1.hasOwnProperty('bark'));
console.log(dog2.hasOwnProperty('bark'));


// Question 6: Default constructor property

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog = new Dog('Rex');

console.log(dog.constructor === Dog);
console.log(Dog.prototype.constructor === Dog);
console.log(dog.hasOwnProperty('constructor'));


// Question 7: Replacing prototype loses constructor

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  bark: function() {
    console.log(`${this.name} barks.`);
  }
};

let dog = new Dog('Rex');

console.log(dog.constructor === Dog);
console.log(dog.constructor === Object);
console.log(Dog.prototype.hasOwnProperty('constructor'));
dog.bark();


// Question 8: Restoring constructor manually

'use strict';

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,

  bark: function() {
    console.log(`${this.name} barks.`);
  }
};

let dog = new Dog('Rex');

console.log(dog.constructor === Dog);
console.log(dog.constructor === Object);
console.log(Dog.prototype.hasOwnProperty('constructor'));
dog.bark();


// Question 9: Pseudo-classical inheritance

'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} barks.`);
};

let dog = new Dog('Rex', 'Lab');

console.log(dog.name);
console.log(dog.breed);
dog.speak();
dog.bark();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog.hasOwnProperty('speak'));


// Question 10: Method overriding in pseudo-classical inheritance

'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(`${this.name} barks loudly.`);
};

let dog = new Dog('Rex', 'Lab');

dog.speak();

console.log(dog.hasOwnProperty('speak'));
console.log(Dog.prototype.hasOwnProperty('speak'));
console.log(Animal.prototype.hasOwnProperty('speak'));


// Question 11: Manually calling parent prototype method

'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  Animal.prototype.speak.call(this);
  console.log(`${this.name} barks loudly.`);
};

let dog = new Dog('Rex', 'Lab');

dog.speak();


// Question 12: Inherited method extraction loses this

'use strict';

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog = new Dog('Rex');

let speak = dog.speak;
speak();


// Question 13: Class inheritance

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex', 'Lab');

console.log(dog.name);
console.log(dog.breed);
dog.speak();
dog.bark();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog.hasOwnProperty('speak'));


// Question 14: Class method overriding

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks loudly.`);
  }
}

let dog = new Dog('Rex', 'Lab');

dog.speak();

console.log(dog.hasOwnProperty('speak'));
console.log(Dog.prototype.hasOwnProperty('speak'));
console.log(Animal.prototype.hasOwnProperty('speak'));


// Question 15: super.method()

'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(`${this.name} barks loudly.`);
  }
}

let dog = new Dog('Rex');

dog.speak();


// Question 16: Static vs instance methods

'use strict';

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }

  static describe() {
    console.log('Dogs are loyal animals.');
  }
}

let dog = new Dog('Rex');

dog.bark();
Dog.describe();

console.log(dog.hasOwnProperty('bark'));
console.log(Dog.prototype.hasOwnProperty('bark'));
console.log(Dog.hasOwnProperty('describe'));

dog.describe();


// Question 17: Class method extraction loses this

'use strict';

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');

let bark = dog.bark;
bark();


// Question 18: Private field and getter

'use strict';

class Dog {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  bark() {
    console.log(`${this.#name} barks.`);
  }
}

let dog = new Dog('Rex');

console.log(dog.name);
dog.bark();
console.log(dog.hasOwnProperty('name'));


// Question 19: Mixin with Object.assign

'use strict';

const Swimmable = {
  swim() {
    console.log(`${this.name} swims.`);
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }
}

Object.assign(Dog.prototype, Swimmable);

let dog = new Dog('Rex');

dog.bark();
dog.swim();

console.log(dog.hasOwnProperty('swim'));
console.log(Dog.prototype.hasOwnProperty('swim'));


// Question 20: Factory function vs constructor/class

'use strict';

function createDog(name) {
  return {
    name,

    bark() {
      console.log(`${this.name} barks.`);
    }
  };
}

let dog1 = createDog('Rex');
let dog2 = createDog('Maya');

console.log(dog1.bark === dog2.bark);

dog1.bark();
dog2.bark();

console.log(dog1 instanceof createDog);
console.log(dog1.hasOwnProperty('bark'));