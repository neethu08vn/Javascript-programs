function printHello()
{
    console.log("Hello world")
}
printHello()

console.log("*****Function with Parameters*****")
function addition(a,b)
{
    
    let result = a+b
    console.log(result)
}
addition(10,15)
addition(2,9)

console.log("*****Function with return*****")
function subtraction(x,y)
{
    let sub = x-y
    return sub
}
const output = subtraction(50,20)
console.log(output)
console.log(subtraction(100,20))//not recommented 

//Anonymous function
const greet=function ()
{
    console.log("Good morning")
}
greet()

//Arrow function
const display = ()=>{console.log("My name is Neethu")}
display()

const add = (a,b,c)=>a+b+c
const sum=add(1,2,3)
console.log(sum)
