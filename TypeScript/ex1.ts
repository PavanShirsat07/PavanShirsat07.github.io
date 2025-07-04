var newMessage:string = "Hello, TypeScript!";
console.log(newMessage);

// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Pavan Shirsat"));
 
let a=[1,2,3,4,5];
let b=a;
b.push(6);
// console.log(a); // Output: [1, 2, 3, 4, 5, 6]

//Tuple example
let tuple:[number,string,number,string] = [1, "Hello",10,"World"];
// console.log(tuple[0]); // Output: 1

//Array example
let arr: (number | string | boolean)[] = [10, "pavan", true, 1, 2, 3];
// console.log(arr[0]); // Output: 10

//Enum example
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}
let mycolor:Color = Color.Red;
// console.log(mycolor); // Output: Red

//Function example
interface User {
    name: string;
    age: number;
}

function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
// console.log(greetUser({ name: "Pavan", age: 22 }));
