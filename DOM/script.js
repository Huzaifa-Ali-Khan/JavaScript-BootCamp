// //DOM Document Object Model
//how to acdess elements of html
// let a =document.getElementsByClassName("btn");
// console.dir(a);
// let b = document.getElementById("heading");
// console.dir(heading);
// let c=document.getElementsByTagName("p");
// console.dir(c);
// let elements=document.querySelectorAll("p");
// console.dir(elements)

//how to change,read, properties of an element;

//tagName;

let div=document.querySelector("div");
console.dir(div);
let h2=document.querySelector("h2");
h2.innerText=h2.innerText + " from Huzaifa Ali";
let boxes=document.querySelectorAll(".box");
let idx=0;
for(box of boxes){
    idx++;
    box.innerText=`Ali no :${idx}`
}


// 1. tagName
// 2. innerText
// 3. innerHTML
// 4. textContent