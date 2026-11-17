let age: number = 30 //variable declaration with type annotation
age = 25 //reassigning the value
//age = "20" //This will cause error because the age is the number not String
let name1: String = "Neethu"
let isFalse: Boolean = true
console.log("*****Multiply function with parameters*********")
function multiply(a:number,b:number)
{
    //let a:number = 10
    //let b:number = 20
    console.log(a*b)

}
multiply(10,2)

console.log("*****Subtraction function with return type*********")
function subtraction(a:number,b:number) :number //function with return type
{
    return (a-b)
}
console.log(subtraction(20,10))

//Array
console.log("*****String and Number Arrays*********")
let fruits:String[] = ["Apple","Mango","Orange"]
let marks:number[]=[85,80,75]
console.log(fruits)
console.log(marks)

//Type script object
const student :{name:String, age:number, isStudent:Boolean}={name:"Neethu", age:20, isStudent:true}
console.log(student.name)
student.name="Anu";
(student as any).gender = "Female"
console.log(student)


