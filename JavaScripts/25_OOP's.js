/*
OOP (Object-Oriented Programming) --> OOP is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods). OOP aims to implement real-world entities like inheritance, hiding, polymorphism etc. in programming.

Key Concepts of OOP:
1. Classes and Objects
2. Inheritance
3. Encapsulation
4. Polymorphism
5. Abstraction

*/
// Object --> A basic unit of OOP that represents a real-world entity. Objects have properties (attributes) and methods (functions) that define their behavior.

// Example of an Object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function() {
    console.log("Car started");
  }
};

// Prototype --> A prototype is an object from which other objects inherit properties. In JavaScript, every object has a prototype, and it can be used to add methods and properties to all instances of an object.

// Example of Prototype -- .prototype use
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const john = new Person("John", 30);  // class instance
john.greet();

/* ###################################################################################################### */

// Class --> A blueprint for creating objects with shared properties and methods.
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog1 = new Animal("Buddy", "Dog");
dog1.speak();


/* ###################################################################################################### */

// Inheritance --> Mechanism where a new class can inherit properties and methods from an existing class.
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {  // extends = take properties and methods from Animal
  constructor(name, breed) {
    super(name, "Dog");   // super = call the constructor of the parent class
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog2 = new Dog("Buddy", "Golden Retriever");
dog2.speak();
