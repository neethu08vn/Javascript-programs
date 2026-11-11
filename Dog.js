import {Animal} from "./Animal.js"
class Dog extends Animal
{
    constructor(name,bread)
    {
        super(name)     //it refers parent class object
        this.name = name
        this.bread = bread
    }
    bark()
    {
        console.log("Child class method-bark()")
    }
}

const dog = new Dog("Tom","Pug")
dog.bark()
dog.eat()

const animal = new Animal("Leo")
animal.eat()




