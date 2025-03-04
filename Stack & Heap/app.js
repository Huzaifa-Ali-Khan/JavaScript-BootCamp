let myName = "Huzaifa";
let anotherName = myName;
anotherName = "Ali";
console.log(myName);
console.log(anotherName);

// ✅ Primitive Data Types (Stored by value)
// These are immutable (cannot be changed) and stored directly in memory.

// Number → let num = 42;
// String → let str = "Hello";
// Boolean → let isTrue = true;
// Undefined → let x; (not assigned a value)
// Null → let y = null; (empty value)
// Symbol → let sym = Symbol("id"); (unique identifier)
// BigInt → let big = 9007199254740991n; (large numbers)
console.log("-----Heap-----");
let userOne = {
  name: "Khan",
  age: 20,
};
let userTwo = userOne;
userOne.name = "Ali";
console.log(userOne.name);
console.log(userTwo.name);
// ✅ Non-Primitive Data Types (Stored by reference)
// These are mutable (can be changed) and stored as references in memory.

// Object → let obj = { name: "Huzaifa" };
// Array → let arr = [1, 2, 3];
// Function → let func = function() { return "Hello"; };
// 🔹 Stored in heap memory
// 🔹 Compared by reference (not value)
