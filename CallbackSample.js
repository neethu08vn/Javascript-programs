function displayResult(result)
{
    console.log("result is:" +result)
}

function findAverage(mark1,mark2,mark3,mycallback)
{
    let avg = (mark1+mark2+mark3)/3
    mycallback(avg)
}

function findSum(mark1,mark2,mark3,mycallback)
{
    let sum = mark1+mark2+mark3
    mycallback(sum)
}
findAverage(70,80,90,displayResult)
findSum(10,20,30,displayResult)