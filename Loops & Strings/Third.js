//for Loop
// {
// let sum=0;
// for(let i=1;i<=10;i++){
//     // console.log("i = ",i)
//     sum=sum+i;
//     // console.log("10 X",i,"=",10*i); 
// }
// console.log("sum: ",sum)
// }

//while
// let i=0;
// while(i<10){
//     i++;
//     console.log(i)
// }
//Do while Loop
// {
//     let i=0;
//     do{
//         console.log("Hello Ali"); //Do while loop runs atleast once
//         i++;
//     }
//     while(i<10);
// }

//For of Loop used for Strings
// {   let length=0
//     let str="Huzaifa";
//     for(let i of str){
//         length=length+1;
//         console.log(i);
//     }
//     console.log("String size: ",length)
// }

//For in Loop used for Objects
// {
//  let student={
//     name:"Huzaifa",
//     Age:22,
//     isPresent:true,
//     CGPA:3.46
//             };
// for(let key in student){
//     console.log(key,":",student[key]);
// }
// } 
//Practise Question
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//     console.log("num : ",i);
//             }
//          }
// let num=prompt("Enter a Number untill it is correct: ");
// let gameNum="10";
// while(num!=gameNum){
// num=prompt("You are lanti ! Guess again: ");
// }
// alert(" You guess it correct !");
// console.log(" You guess it correct !");

//Strings
{
let str1="Huzaifa";
let str2='Huzaifa'; //both strings can be intialised
console.log("str2:",str2.length);
console.log("str2:",typeof(str2));
// for(let i=0;i<str2.length;i++){
//     console.log(str2[i]);
// }

//Template Literals = Special types of Strings 
//Variables can be written in strings using String Interpolation = template literals
console.log(`sum of two digits: ${1+1}`)
console.log("huzaifa \n ali") //new line

let str3=`Template Literals = Special types of Strings`;
console.log(str3);
console.log(typeof(str3));

let obj={
    item:"chair",
    price:10
};
let str4=`The cost of ${obj.item} is of ${obj.price}`
console.log(str4);
console.log("the cost of",obj.item,"is of",obj.price);
//Strings are immutable in JS
//strings methods
let name='   Huzaifa ali      '
let no="123456";
let str5="hello"; 
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.trim()) //skips whitespaces
console.log(no.slice(1)) //slicing strings starting and ending index
console.log(str1+str2); //concatenation
console.log(str5.replace("lo","p")); //replacing method using string
console.log(str5[0]);
}

//Practise Question
let fullName=prompt("enter your full name: ");
let userName="@"+fullName+fullName.length;
console.log(userName);
