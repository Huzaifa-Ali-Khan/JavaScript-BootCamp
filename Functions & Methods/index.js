// // function Name(Name) //parameter
// // {
// //     console.log(`Hello ,${Name}`);
// // }
// // Name("Huzzi"); //argument

// // function addition(a,b)
// // {
// //     //parameters are local variables
// //     console.log("before return");
// //     total=a+b;
// //     return total;
// //     console.log("after return");
// // }
// // let value=addition(23,17);
// // console.log(total);

// //Modern JS
// //Arrow Function
// // const arrowFunction=(a,b) => {
// //     console.log(a+b);
// // }
// // arrowFunction(19,11);

// // const multiplication=(x,y) => 
// // {
// //     console.log(x*y);
// // }
// // multiplication(10,9);

// function vowels(str1){
// countValue=0;
// for(const char of str1){
//     if(char ==='a'||char ==='e'||char ==='i'||char ==='o'||char ==='u'){
//         countValue+=1;
//     }
// }
// console.log(`Total vowels: ${countValue}`);
// }
// vowels("Huzaifa");


// const countVowels=(str)=>{
//     countValue=0;
//     for(const char of str1){
//         if(char ==='a'||char ==='e'||char ==='i'||char ==='o'||char ==='u'){
//             countValue+=1;
//         }
//     }
//     console.log(`Total vowels: ${countValue}`); 
// }
// vowels("Huzaifa");

// //Function can be returns as variable and can be pass as arguements
// // A function which pass an arguement as fucntion is called as callback Function

// let array=["huzaifa","ali","hassan"];
// array.forEach(function PrintValue(val){
// console.log(val);
// });

// console.log("------");
// function myArr(){
//     for(let i=0;i<array.length;i++){
//     console.log(`element: ${array[i].toUpperCase()} index: ${i}`);
//     }
// }
// myArr();

// let Numbers=[1,2,3,4];
// function Square(){
// for(let i=0;i<Numbers.length;i++){
// console.log(`Numbers: ${Numbers[i]} & Square: ${Numbers[i]*Numbers[i]}`);
//     }
// }
// Square();

// // forEach Loop only for arrays
// {
//     Numbers.forEach(function myFun(val,idx,Numbers){
//         console.log("Number:",val,"Sqaure: ",val*val);
//     });
// } 


//Map method of Array : it creates a new array of same array when implimenting some operations

// let array=[1,2,3,4,5,6,7,8,9,10];
// {
// let sqaureArray=array.map((val)=>{
//     return val**2;
// });

// console.log(array);
// console.log(sqaureArray);
// }
// //Filter method is used to create a new array for given condition
// {
// let evenArray=array.filter((val)=>{
// return val%2==0;
// });
// console.log(array);
// console.log("Even array:",evenArray);
// }

// Reduce method
// {
//     let array=[1,2,3,4];
//     let sum=array.reduce((res,val)=>{ //reduce = intial+current pointer
//         return res+val;
//     });
//     console.log(sum);
// }

// { //Max/less value from an array
//     let array=[1,2,3,4,5,6,7,8,9,10];
//     let maxValue=array.reduce((pre,cur)=>{
//         return pre<cur ? pre : cur ;
//     });
//     console.log(maxValue);
// }

// {   //Q1
//     let marks=[10,20,30,40,50,60,90,91,94,99];
//     let toppers=marks.filter((val)=>{
//         return val>=90;
//     });
//     console.log(toppers);
// }

{
    let n=prompt("Enter a number: ");
    let array=[];
    for(let i=1;i<=n;i++){
        array[i-1]=i;
    }
    let sum=array.reduce((pre,cru)=>{
        return pre+cru;
    });
    let fact=array.reduce((pre,cru)=>{  //1x2x3x4x5=120
        return pre*cru;
    })
    console.log("array: ",array);
    console.log("Sum of array:",sum);
    console.log("Factorial of array:",fact);
}

// {
//     let array=[1,2,3,90,91,92,95,96];
//     let toppers=array.filter((val)=>{
//         return val>=90;
//     });
//     console.log(array)
//     console.log("Toppers: ",toppers);
// }