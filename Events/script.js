//Event : Change in state of an object used to trigger a work 
//Mouse event = click,double click,clickdown
//keyboard = Kepress,KeyUp.KeyDown
//Form events = submit etc
//Notifications are bassically Notifications

//node.event only handles one event
// let btn1=document.querySelector("#btn1");

// btn1.onclick=(e)=>{
// // console.log(e);
// // console.log(e.type);
// console.log(e.target);
// console.log(e.clientX,e.clientY);
// }
// let btn2=document.querySelector("#btn1");
// btn1.ondblclick=()=>{
//     console.log("Button was clicked from second function")
// }
//Mouse Hover event 
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("Mouse is inside div");
//     // alert("Mouse is in Div");
//     div.style.backgroundColor="White";
//     div.style.color="blue";
    
// }

function newFun(){
console.log("Button was clicked!");
}
//Event Listener #3
btn1.addEventListener("click",()=>{
    console.log("Button was clicked from arrow function as handler -1");
    // console.log(e.type);
    // console.log(e.target);
});
const handler_2 = ()=>{
    console.log("Button was clicked from arrow function as handler -2");
    };
btn1.addEventListener("click",handler_2);
btn1.removeEventListener("click",handler_2);


//Q1 : Toggle theme
{
let modeBtn=document.querySelector("#modeBtn");
currMode="light";
let body=document.querySelector("body");

modeBtn.addEventListener("click",()=>{

if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark");
    body.classList.remove("light");
    console.log(currMode);
}
else{
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
    console.log(currMode);
}
});
}

// let body=document.querySelector("body");
// body.addEventListener("mousemove",(e)=>{
// console.log(e.clientX,e.clientY);
// });
//create a event which prints mouse position on the screen.