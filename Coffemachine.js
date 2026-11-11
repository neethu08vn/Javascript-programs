class CoffeMachine
{
    #boilWater()
    {
        console.log("Boil water")
    }
    #addMilk()
    {
        console.log("Add milk")
    }
    #addSugar()
    {
        console.log("Add sugar")
    }
    #addCoffePowder()
    {
        console.log("Add coffe powder")
    }
    addTeaPowder()
    {
        console.log("Add tea powder")
    }
    makeCoffe()
    {
        this.#boilWater()
        this.#addMilk()
        this.#addSugar()
        this.#addCoffePowder()
        console.log("Your coffe is ready")

    }
    makeTea()
    {
        this.#boilWater()
        this.#addMilk()
        this.addTeaPowder()
        console.log("Tea is ready")
    }
}

const coffemachine = new CoffeMachine()
coffemachine.makeCoffe()
coffemachine.makeTea()