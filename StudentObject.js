
const student = 
{
    name:"Neethu", //keyvalue
    age: 30,
    City: "Kochi"
}

console.log(student.name)//dot notation
console.log(student["age"]) //bracket notation

student.Gender = "Female" //add new key-value
console.log(student)

student.age = 25 //update an existing value
console.log(student.age)

delete student.City //delete
console.log(student.City)

for (let key in student)
{
    console.log(key +":" +student[key])
}