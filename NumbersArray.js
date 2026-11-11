let numArray = [5,8,3,10,4]
//to loop using for of  - for of is loop for arrays
console.log("*****Using for of loop******")
for(let num of numArray)
{
    console.log(num)
}

console.log("*****Using for loop******")
let sum=0
for(let i =0;i<numArray.length;i++)
{
    //console.log(numArray[i])
    sum+=numArray[i]

}
console.log(sum)

console.log("*****Sum of array using reduce method*****")
let totalsum = numArray.reduce((p,c)=>p+c,10)//p-previous value; c-current value
console.log(totalsum)

console.log("*****Print even Array using Filter method*****")
let evenArray = numArray.filter(num =>num%2==0)
console.log(evenArray)

console.log("*****double the array using map method*****")
let doublearray = numArray.map(n=>n*2)
console.log(doublearray)

console.log("****************")
let numarray2 = [10,22,5,25,18]
const result = numarray2.filter(nm=>nm%5==0).map(nm=>nm*5).reduce((p,c)=>p+c)
console.log(result)
