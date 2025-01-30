//Get Attribute
let h1=document.querySelector("h1");
console.log(h1);
let Class=h1.getAttribute("class");
console.log(Class);
let Name=h1.getAttribute("name");
console.log(Name);
//SetAttribue
console.log(h1.setAttribute("class","this is new Class of h1"));

let div = document.querySelector("div");
h1.style.backgroundColor="white";
h1.style.borderRadius="5px";
h1.innerText= "Huzaifa Ali";
// h1.style.visibility="hidden";

//Dom Manipulation:
//Create
let newBtn=document.createElement("button");
console.log(newBtn);
newBtn.innerText='ClickMe'
//adding element Append,prepend,before,after
let p=document.querySelector("p");
p.after(newBtn);
newBtn.style.width="100px";
newBtn.style.height="50px";

let h2=document.createElement("h2");
h2.innerText="Huzaifa ALi h2 heading";
p.append(h2);
// p.remove();
h2.remove();


//q1
// let newButton=document.createElement("button");
// newBtn.before(newButton);

// newButton.style.backgroundColor="Red";
// newButton.style.width="150px";
// newButton.style.height="50px";
// newButton.style.color="white";
// newButton.innerText="click me";

//q2:
let paragraph=document.querySelector("p");
console.log(p.getAttribute("class"));


//we can use different classes for one element by using class list.