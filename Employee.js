//polymorphism
export class Employee
{
    constructor(empID,empName)
    {
        this.empID=empID
        this.empName=empName
    }

    responsibility()
    {
        console.log("Teacher")
    }
    printDetails()
    {
        console.log("parent details")
        console.log(`${this.empID} ${this.empName}`)
    }
}