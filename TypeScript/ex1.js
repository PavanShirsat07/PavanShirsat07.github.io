"use strict";
var newMessage = "Hello, TypeScript!";
console.log(newMessage);
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Pavan Shirsat"));
let a = [1, 2, 3, 4, 5];
let b = a;
b.push(6);
// console.log(a); // Output: [1, 2, 3, 4, 5, 6]
//Tuple example
let tuple = [1, "Hello", 10, "World"];
// console.log(tuple[0]); // Output: 1
//Array example
let arr = [10, "pavan", true, 1, 2, 3];
// console.log(arr[0]); // Output: 10
//Enum example
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
let mycolor = Color.Red;
function greetUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
let p1 = { x: 10, y: 20 };
let p2 = { x: 30, y: 40 };
let p3 = { x: 50, y: 60, getName() { } };
// console.log(p1, p2, p3); // Output: { x: 10, y: 20 } { x: 30, y: 40 } { x: 50, y: 60 }
class bottle {
    constructor(name, capacity, color) {
        this.name = name;
        this.capacity = capacity;
        this.color = color;
    }
}
let b1 = new bottle("Water Bottle", 1000, "Blue");
console.log(b1); // Output: bottle { name: 'Water Bottle', capacity: 1000, color: 'Blue' }
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let p4 = new person("Pavan", 22); // Output: Name: Pavan, Age: 22
console.log(p4); // Output: person { name: 'Pavan', age: 22 }
