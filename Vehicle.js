class Vehicle
{
    startEngine()
    {
        console.log("Start engine function invoked")
    }
    constructor(brand,color)//parameterized constructor
    {
        console.log("Constructor invoked")
        this.brand = brand
        this.color = color
    }

    displayCarDetails()
    {
        console.log(this.brand)
        console.log(this.color)
    }

}

const vehicle = new Vehicle("BMW","Black") //object creation
vehicle.startEngine()
vehicle.displayCarDetails()

const vehicleobj1 = new Vehicle("Royal Enfield" , "Red")
vehicleobj1.startEngine()
vehicleobj1.displayCarDetails()
