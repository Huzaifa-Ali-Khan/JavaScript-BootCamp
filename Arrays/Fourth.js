let arr1=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<arr1.length;i++){
//     sum+=arr1[i];
// }
// let avg=sum/arr1.length;
// console.log(`sum of array: ${avg}`)

// let arr2=[250,645,300,900,50];
// for(let i=0;i<arr2.length;i++){
// let discount=arr2[i]-arr2[i]*(10/100);
// console.log(`Price:Rs.${arr2[i]} \nDicounted Price: Rs.${discount}`)
// }
// console.log("array length: ",arr1.length);
// console.log("Type: ",typeof(arr1));
// console.log("Index: ",arr1[0]);
// arr1[0]=10;
// console.log("Index: ",arr1[0]);
// console.log(arr1) //Array is mutable not string.

//Push pop toString
// arr1.push(61);
// console.log(arr1)
// arr1.pop(61);
// console.log(arr1)
// arr2=arr1.toString();
// arr1.push("Huzaifa");
// console.log(arr1)
// let array=arr1.concat(arr2);
// console.log(array) 


//Unshift and Shift
// arr1.unshift("Huzaifa"); //add element at the start of array
// console.log(arr1)    
// arr1.shift("Huzaifa"); //deletes element at the start of array and return
// console.log(arr1)    

//array slicing returns a piece of an array
// console.log(arr1.slice(-4,-1)) //length-elementReverseiIndex=element and endingIndex
let arr2=[1,2,3,4,5,6,7,8]
console.log(arr2)
//splice it changes the orginal array. it removes,replaces
// arr2.splice(2,2,10,11); //removes and replaces
// arr2.splice(2,0,10,11); //adds elements
// console.log(arr2)
// arr2.splice(2,2); //removes elements
// console.log(arr2);
arr2.splice(6,1,999); //removes elements
console.log(arr2);

{   //question#2
    let array=[111,1,2,3,4,555,6,7,8,9,10,101]
    console.log(array);
    array.shift();
    console.log(array);
    array.splice(4,1,5);
    console.log(array);
    array.push(999);
    console.log(array);
}

