//child class of polymorphism

import { Employee } from "./Employee.js"

class Teacher extends Employee
{
    constructor(subject)
    {
        super(1004,"Neethu")
        this.subject=subject
    }

    responsibility()
    {
        console.log(`${this.subject} is teaching`)
    }

    displayDetails()
    {
        console.log("child details")
    }
}

const teacher = new Teacher("Mathematics")
teacher.responsibility()

teacher.displayDetails()
teacher.printDetails()

const employee = new Employee(1256,"Anu")
employee.responsibility()
employee.printDetails()
console.log(employee.empID)
console.log(employee.empName)