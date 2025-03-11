// const myObj={
//     name:"Huzaifa",
//     age:23,
//     city:"Karachi",
//     hobbies: ["reading", "swimming", "coding"],
// }
// console.log(myObj.hobbies[1])
// myObj.name="ali"
// console.log(myObj[name])
// console.log(myObj[hobbies])

const secretKey = Symbol("secret"); 

const account = {
    name:"Huzaifa Ali Khan",
    balance:1000,
    [secretKey]:"this is hidden"
}
console.log(account.name);
console.log(account.balance);
console.log(account[secretKey]);
account.secretKey="1234";
console.log(account);
