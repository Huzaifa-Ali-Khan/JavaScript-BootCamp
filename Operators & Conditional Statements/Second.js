// Comments
/*this is
double line comment*/
console.log("hello world");
{
let a=5;
let b =2;
//Arthemtic Operations
console.log("a + b = ",a+b  );
console.log("a - b = ",a-b  );
console.log("a * b = ",a*b  );
console.log("a / b = ",a/b  );
console.log("a % b = ",a%b  );
console.log("a ** b = ",a**b  );
//Uniary Operations
console.log("a = ",--a , "b = ",--b  );
console.log(a,b)
a++; //Post increrment
b++; //Pre increrment
console.log("a = ",a--, "b = ",++b  );
}
{
//Asignment Operators
let a = 5;
let b = 2;
c=a; //c equals a
a+=4; //equals to a=5, + 4 = 9
a-=4; //equals to a=5, - 4 = 1
a**=4;
a%=10;
a*=5;
// c=a+4;
console.log(a)
}
//Comparison Operators
{
let a=10;
let b="10";
let c=4;
console.log(a==10) //Comparison Operator return boolean value
console.log(a==b) //js first conver the string value into int value then compare it
console.log(a===b) //=== checks the value and data type
console.log(a!==b)
console.log(a<=10)
}
//Logical Operators
{
let a=10;
let b=9;
console.log(a==10 || b==9)
console.log(a > 0 && b===9)
console.log(a!==9)
console.log(a!==b)
}

//Conditional Statements
{
    let mode="light";
    let color;

    if(mode === "dark"){
        color = "black";
    }
    if(mode === "light"){
        color = "white";
    }

    console.log(color);
}
{
    // let age=18;
    // if(age>=18){
    //     console.log("vote");
    // }
    // else{
    //     console.log("Can not Vote");
    // }
}
{
let number="10";
if(number%2===0){
    console.log(number, " is Even No");
}
else{
    console.log("Odd No")
}
}
{
    let age=41;
    if(age>=0 && age<=25){
        console.log("Yongster");
    }
    else if(age>=26 && age<=40){
        console.log("Middle aged");
    }
    else{
        console.log("Senior Citizen");
    }
}
if(age=41) console.log(age); //Non proffesional 

//Ternary Operators
{
    let color="white";
   result =  color="white"? "Light" : "Dark"; //Compact if else
    console.log(result)
}
//MDN for Documentation

//User input
// let name = prompt("Hello")
// console.log("Hello ",name)

// { //Program #1
// let num=prompt("Enter a number: ")
// if(num%3==0){
//     console.log(num, "is Multiple of 3 !")
//     }
// else{
// console.log(num, "is not a multiple of 3 !");
// }
// }
{   //Program #2
    let score=prompt("Enter Student Score: ");
    let grade;
    if(score>=90 && score<=100){
        grade="A";
    }
    else if(score>=70 && score<89){
        grade="B";
    }
    else if(score>=60 && score<70){
        grade="C";
    }
    else if(score>=50 && score<60){
        grade="D";
    }
    else if(score>=0 && score<50){
        grade="F";
    }
    console.log("Score : ",score," Grade :",grade)
}