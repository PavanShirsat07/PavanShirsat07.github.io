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


//Type alias example
type point={
    x: number;
    y: number;
}
let p1: point = { x: 10, y: 20 };

//Difference between type and interface
type Point ={
    x: number;
    y: number;
}

type PointType = point & {
    getName(user:string): void;
}

let p2: Point = { x: 30, y: 40};
let p3: PointType = { x: 50, y: 60 , getName(){}};
// console.log(p1, p2, p3); // Output: { x: 10, y: 20 } { x: 30, y: 40 } { x: 50, y: 60 }


class bottle{
    public name: string;
    public capacity: number;
    public color: string;
    constructor(name: string, capacity: number, color: string) {
        this.name = name;
        this.capacity = capacity;
        this.color = color;
    }
}


let b1 = new bottle("Water Bottle", 1000, "Blue");
console.log(b1); // Output: bottle { name: 'Water Bottle', capacity: 1000, color: 'Blue' }

class person{
    constructor(public name: string, public age: number){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let p4 = new person("Pavan", 22); // Output: Name: Pavan, Age: 22
console.log(p4); // Output: person { name: 'Pavan', age: 22 }