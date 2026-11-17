"use strict";
let age = 30; //variable declaration with type annotation
age = 25; //reassigning the value
//age = "20" //This will cause error because the age is the number not String
let name1 = "Neethu";
let isFalse = true;
console.log("*****Multiply function with parameters*********");
function multiply(a, b) {
    //let a:number = 10
    //let b:number = 20
    console.log(a * b);
}
multiply(10, 2);
console.log("*****Subtraction function with return type*********");
function subtraction(a, b) {
    return (a - b);
}
console.log(subtraction(20, 10));
//Array
console.log("*****String and Number Arrays*********");
let fruits = ["Apple", "Mango", "Orange"];
let marks = [85, 80, 75];
console.log(fruits);
console.log(marks);
