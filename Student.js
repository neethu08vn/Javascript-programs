class Student
{
    constructor(mark1,mark2,mark3)
    {
        this.mark1 = mark1
        this.mark2 = mark2
        this.mark3 = mark3
    }

    displayMarks()
    {
        console.log(this.mark1)
        console.log(this.mark2)
        console.log(this.mark3)
    }

    displayAverage()
    {
        let average = (this.mark1 + this.mark2 + this.mark3)/3
        console.log("Average:" +average)
    }
}

const student = new Student(55,50,49)
student.displayMarks()
student.displayAverage()

const student2 = new Student(50,60,70)
student2.displayMarks()
student2.displayAverage()