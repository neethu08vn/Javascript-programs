let fruits = ["Apple","Mango","Orange"]//length =3 , index = 2
console.log(fruits[1])
console.log(fruits.length)//find array length
fruits.push("Kiwi")//Add elements at the end
console.log(fruits)
fruits.pop()//remove an element at the end
console.log(fruits)
fruits.shift()//remove the first element
console.log(fruits)
fruits.unshift("Banana")//add an element at the beginning
console.log(fruits)
console.log(fruits.includes("Apple"))//check whether an element exist
console.log(fruits.indexOf("Mango"))//find the index of an element
fruits.push("Apple","Cherry","Pomogranate")
console.log(fruits)
const slicedArray = fruits.slice(1,5)//slice()-Extract a portion without modifying the original array
console.log(slicedArray)
console.log(fruits)
//splice - Add, remove or replace elements
fruits.splice(2,3) //	delete the elements in between(here from 2nd index to 3 count)
console.log(fruits)
fruits.splice(1,0,"Strawberry","Grapes")
console.log(fruits)
fruits.splice(3,2,"Watermelon","Orange","Blueberry")
console.log(fruits)

console.log("*****Using for of loop******")
for(let fr of fruits)
{
    console.log(fr)
}

console.log("*****Using for loop******")

for(let i =0;i<fruits.length;i++)
{
    console.log(fruits[i])  

}