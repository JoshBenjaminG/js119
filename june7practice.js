// 1. Basic method invocation
'use strict';

let person1 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

console.log(person1.sayName());

// Questions:
// Where is `this`?
// Is it inside a regular function or arrow function?
// How is `sayName` invoked?
// What is immediately to the left of the calling parentheses?
// What does `this` become?
// What gets logged?


// 2. Context loss through assignment
'use strict';

let person2 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

let sayName2 = person2.sayName;

console.log(sayName2());

// Questions:
// What does `let sayName2 = person2.sayName` store?
// Is `sayName2()` invoked as a method or plain function?
// What is `this` in strict mode?
// What happens when the function evaluates `this.name`?


// 3. Explicit context with call
'use strict';

let person3 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

let otherPerson3 = {
  name: 'Maya'
};

console.log(person3.sayName.call(otherPerson3));

// Questions:
// Is `sayName` regular or arrow?
// What does `.call(otherPerson3)` do?
// What does `this` become?
// What gets logged?


// 4. Permanent context with bind
'use strict';

let person4 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

let otherPerson4 = {
  name: 'Maya'
};

let boundSayName4 = person4.sayName.bind(otherPerson4);

console.log(boundSayName4());
console.log(boundSayName4.call(person4));

// Questions:
// What does `bind(otherPerson4)` return?
// What is `this` inside the bound function?
// Can `.call(person4)` override the bound `this`?
// What gets logged?


// 5. Arrow function directly inside object literal
'use strict';

let person5 = {
  name: 'Nina',

  sayName: () => {
    return this.name;
  }
};

console.log(person5.sayName());

// Questions:
// Is `this` inside an arrow function?
// Does `person5.sayName()` set `this` to person5?
// Does the object literal create a `this` binding?
// What surrounding scope does the arrow use?
// Does this reliably log 'Nina'?


// 6. Arrow returned from regular method
'use strict';

let person6 = {
  name: 'Nina',

  makeSayName() {
    return () => {
      return this.name;
    };
  }
};

let sayName6 = person6.makeSayName();

console.log(sayName6());

// Questions:
// Where is the arrow created?
// What regular function encloses the arrow?
// How is `makeSayName` invoked?
// What does the arrow capture for `this`?
// Does `sayName6()` change the arrow's `this`?
// What gets logged?


// 7. Regular function returned from regular method
'use strict';

let person7 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return this.name;
    };
  }
};

let sayName7 = person7.makeSayName();

console.log(sayName7());

// Questions:
// Is `this` inside an arrow or regular function?
// Does the returned regular function capture `this` from makeSayName?
// How is `sayName7` invoked?
// What is `this` in strict mode?
// What happens?


// 8. Returned regular function invoked with call
'use strict';

let person8 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return this.name;
    };
  }
};

let otherPerson8 = {
  name: 'Maya'
};

let sayName8 = person8.makeSayName();

console.log(sayName8.call(otherPerson8));

// Questions:
// What does `person8.makeSayName()` return?
// Is the returned function regular or arrow?
// What does `.call(otherPerson8)` do?
// What gets logged?


// 9. Arrow created inside a returned regular function
'use strict';

let person9 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return () => {
        return this.name;
      };
    };
  }
};

let otherPerson9 = {
  name: 'Maya'
};

let regularFn9 = person9.makeSayName();

let arrowFn9 = regularFn9.call(otherPerson9);

console.log(arrowFn9());

// Questions:
// What does `person9.makeSayName()` return?
// How is `regularFn9` invoked?
// What is `this` inside `regularFn9`?
// When is the arrow created?
// What does the arrow capture?
// Does `arrowFn9()` change the arrow's `this`?
// What gets logged?


// 10. Same as above, but regularFn is called plainly
'use strict';

let person10 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return () => {
        return this.name;
      };
    };
  }
};

let regularFn10 = person10.makeSayName();

let arrowFn10 = regularFn10();

console.log(arrowFn10());

// Questions:
// How is `regularFn10` invoked?
// What is `this` inside `regularFn10` in strict mode?
// What does the arrow capture?
// What happens when `arrowFn10()` evaluates `this.name`?


// 11. Bound regular function creates arrow
'use strict';

let person11 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return () => {
        return this.name;
      };
    };
  }
};

let regularFn11 = person11.makeSayName();

let arrowFn11 = regularFn11.bind(person11)();

console.log(arrowFn11.call({ name: 'Maya' }));

// Questions:
// What does `regularFn11.bind(person11)` create?
// What is `this` inside regularFn11 when it runs?
// What does the arrow capture?
// Can `.call({ name: 'Maya' })` change the arrow's `this`?
// What gets logged?


// 12. Deep chain: returned regular function creates arrow
'use strict';

let person12 = {
  name: 'Nina',

  makeSayName() {
    return function() {
      return () => {
        return this.name;
      };
    };
  }
};

let otherPerson12 = {
  name: 'Maya'
};

let thirdPerson12 = {
  name: 'Lena'
};

console.log(person12.makeSayName.call(otherPerson12)().call(thirdPerson12));

// Questions:
// Which function is invoked by `person12.makeSayName.call(otherPerson12)`?
// What does that function return?
// What does the first `()` invoke?
// Is that returned function regular or arrow?
// What is `this` inside that returned regular function?
// What does the arrow capture?
// Can `.call(thirdPerson12)` change the arrow's `this`?
// What gets logged or what error occurs?


// 13. Deep chain: arrow returns regular function
'use strict';

let person13 = {
  name: 'Nina',

  makeSayName() {
    return () => {
      return function() {
        return this.name;
      };
    };
  }
};

let otherPerson13 = {
  name: 'Maya'
};

let thirdPerson13 = {
  name: 'Lena'
};

console.log(person13.makeSayName.call(otherPerson13).call(thirdPerson13).call(person13));

// Questions:
// What does `person13.makeSayName.call(otherPerson13)` return?
// Is that returned function regular or arrow?
// Does `.call(thirdPerson13)` change the arrow's `this`?
// What does the arrow return?
// Where is the exact `this.name`?
// Is that `this` inside the arrow or inside the returned regular function?
// What does the final `.call(person13)` do?
// What gets logged?


// 14. Callback context loss
'use strict';

let person14 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

function run14(callback) {
  return callback();
}

console.log(run14(person14.sayName));

// Questions:
// Is `person14.sayName` invoked when passed to run14?
// Where is it actually invoked?
// Is it invoked as `person14.sayName()` or `callback()`?
// What is `this` in strict mode?
// What happens?


// 15. Callback fixed with arrow wrapper
'use strict';

let person15 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

function run15(callback) {
  return callback();
}

console.log(run15(() => person15.sayName()));

// Questions:
// What function is passed to run15?
// Where is the arrow invoked?
// Where is `this` actually located?
// How is `sayName` invoked inside the arrow?
// What does `this` become inside sayName?
// What gets logged?


// 16. Callback arrow wrapper but method already detached
'use strict';

let person16 = {
  name: 'Nina',

  sayName() {
    return this.name;
  }
};

function run16(callback) {
  return callback();
}

let sayName16 = person16.sayName;

console.log(run16(() => sayName16()));

// Questions:
// What does `let sayName16 = person16.sayName` do?
// What function is passed to run16?
// What does the arrow do when invoked?
// How is `sayName16` invoked?
// What is `this` inside sayName16?
// What happens?


// 17. super keeps current this
'use strict';

class Person17 {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Person: ${this.name}`;
  }
}

class Student17 extends Person17 {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  describe() {
    return `${super.describe()}, Grade: ${this.grade}`;
  }
}

let student17 = new Student17('Nina', 10);

console.log(student17.describe());

// Questions:
// What does `super(name)` do?
// How is `student17.describe()` invoked?
// What is `this` inside Student17's describe?
// What does `super.describe()` do?
// Does `super.describe()` lose `this`?
// What gets logged?


// 18. Detached class method with super
'use strict';

class Person18 {
  constructor(name) {
    this.name = name;
  }

  describe() {
    return `Person: ${this.name}`;
  }
}

class Student18 extends Person18 {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  describe() {
    return `${super.describe()}, Grade: ${this.grade}`;
  }
}

let student18 = new Student18('Nina', 10);

let describe18 = student18.describe;

console.log(describe18());

// Questions:
// What does `let describe18 = student18.describe` do?
// How is `describe18` invoked?
// What is `this` inside Student18's describe?
// Does `super.describe()` fix lost `this`?
// What happens?


// 19. Static vs instance method
'use strict';

class Animal19 {
  static kingdom() {
    return 'Animalia';
  }

  speak() {
    return 'noise';
  }
}

class Dog19 extends Animal19 {}

let dog19 = new Dog19();

console.log(Dog19.kingdom());
console.log(dog19.kingdom());

// Questions:
// Where is `kingdom` defined?
// Do subclasses inherit static methods?
// Are static methods available on instances?
// What gets logged or what error occurs?


// 20. Inheritance and method overriding
'use strict';

class Animal20 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog20 extends Animal20 {
  speak() {
    return `${this.name} barks.`;
  }
}

let dog20 = new Dog20('Rex');

console.log(dog20.speak());
console.log(dog20 instanceof Dog20);
console.log(dog20 instanceof Animal20);

// Questions:
// What does `new Dog20('Rex')` do?
// Which `speak` method is found first?
// What does `instanceof` check?
// Why is `dog20 instanceof Animal20` true?
// What gets logged?