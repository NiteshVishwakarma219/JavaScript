// Object -> a collection of key-value pairs
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(person); // { name: 'John', age: 30, city: 'New York' }

// Accessing properties
console.log(person.name); // 'John'
console.log(person['name']); // 'John'

// // Modifying properties
person['city'] = 'York';
        // or
person.city = 'York';
console.log(person); // { name: 'John', age: 30, city: 'York' }

// // Adding properties
person.country = 'USA';
   // or
person['country'] = 'USA';
console.log(person); // { name: 'John', age: 30, city: 'York', country: 'USA' }

// // Deleting properties
delete person['age'];
    // or
delete person.age;
console.log(person); // { name: 'John', city: 'York', country: 'USA' }

// Object methods
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    getCarInfo: function() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
};
console.log(car.getCarInfo()); // '2020 Toyota Camry'

// Object.keys() - returns an array of a given object's property names
console.log(Object.keys(person)); // ['name', 'city', 'country']

// Object.values() - returns an array of a given object's property values
console.log(Object.values(person)); // ['John', 'Los Angeles', 'USA']

// Object.entries() - returns an array of a given object's key-value pairs
console.log(Object.entries(person)); // [['name', 'John'], ['city', 'Los Angeles'], ['country', 'USA']]


// typeof
console.log(typeof person); // 'object'
console.log(typeof car); // 'object'

// Object.assign() - copies all enumerable own properties from one or more source objects to a target object
let person2 ={
    name: 'Jane',
    age: 25,
    city: 'Los Angeles'
}
let newPerson = Object.assign({}, person , person2);
console.log(newPerson); // { name: 'Jane', age: 25, city: 'Los Angeles' }