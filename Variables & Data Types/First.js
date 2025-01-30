console.log("Hello World");
console.log(1+"1");
fullName="huzaifa";
console.log(fullName);
price=1.999;
console.log(price)
x=null;
console.log(x);
y=undefined;
console.log(y);
isPresent=false;
console.log(isPresent);
fullName=5;
console.log(fullName);
// = is assignment variable / == equal to
apple="Saib";
console.log(apple)
fullName="Ali";
let name = "Ali";
console.log(name);
var age=10;
var age=100; //Can redeclare variables it was used before 2015 ES6
console.log(age);
const number=8; //Can not redefine the value of const variables
console.log(number)

//Variables//
console.log("------")
let num=10;
console.log(num)
num=20;
console.log(num)
// const b; //it require intial value
// console.log(b)

{
    let a; // let is block level variable
} 
{
    let a; // let variables can be redeclare in another block
} 
{
const a=10;
}
{
const a=10;
}
//Data Types
//Primitive Data Types:- 7, are fixed : number/Integar, string
const no=10;
console.log(typeof(no));
fullName="Main Abdul Bari ho";
console.log(fullName);
let p=null;
console.log(p,typeof(p));

//Non - Primitive Data Types:- 2 1.BigInt 2.Symbol 3.Objects
let q=BigInt("1234");
let u=Symbol("Hello");
console.log(q,typeof(q));
console.log(u,typeof(u));

//Objects: collection of values. i.e info of students / key:value

const student={
fullName:"Huzaifa Ali",
isPresent:true,
age:22,
cgpa:3.46
}
//accessing the object
student["age"]=student["age"]+1;
console.log(student);
console.log(student["fullName"]);
console.log(student.age); 
//let : updates cosnt obj:keys only updates 


const product={
    title:"Parker Jotter Ball Pen (Black)",
    rating:4,
    price:270,
    offer:"5%"
}
console.log(product)
console.log(typeof(product))
ll="123"+1;
console.log(ll)

//