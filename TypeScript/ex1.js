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
// console.log(mycolor); // Output: Red
