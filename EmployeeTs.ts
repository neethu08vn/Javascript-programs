//Typescript class Example
class Employee
{
    id:number;
    name:String;
    department:String
    constructor(id:number,name:String,department:String)
    {
        this.id=id
        this.name=name
        this.department=department
    }

    displayEmpDetails()
    {
        console.log("Employee id:" +this.id);
        console.log("Employee name:" +this.name);
        console.log("Department:" +this.department)

    }
}

const employee = new Employee(101,"Anu","IT");
employee.displayEmpDetails()




