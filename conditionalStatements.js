//Simple if
//syntax - if(condition){}

let age = 20
let hasLicense = false
if(age>=18)
{
    console.log("You can drive")
}
if(hasLicense)
{
    console.log("Congartulations!!You can drive")
}

else //if-else id(condition){..}else{..}
{
    console.log("Sorry!!You can't drive")
}



//terneary operator - short form of if else
//syntax - condition ? exprnTrue :exprnFalse;

const result =age>=18 ? "You are Eligible" : "Not Eligible"
console.log(result)

//if else if
//if(condion1){}else if(condition2){}else{}

let marks = 75
if(marks>=90)
{
    console.log("Grade A+")
}
else if(marks>=80)
{
    console.log("Grade A")
}
else if(marks>=70)
{
    console.log("Grade B")
}
else if(marks>=60)
{
    console.log("Grade C")
}
else if(marks>=50)
{
    console.log("Grade D")
}
else
{
    console.log("Failed")
}

//switch statement - multiple conditions
/*switch(exprn){
case value
case value2
case value 3
case value nd default}*/


let day = 9
switch(day)
{
    case 1 : 
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4: 
        console.log("Thursday")
        break
    case 5: 
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break   
    default:
        console.log("Invalid day")
    

}