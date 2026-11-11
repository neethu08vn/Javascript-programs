class BankAccount
{
    #balance //private variable
    constructor(accountHolder,initialBalance)
    {
        this.accountHolder=accountHolder
        this.#balance=initialBalance
    }

    showBalance() //to get the balance
    {
       console.log(this.#balance) 
    }

    deposite(amount) //to set the values
    {
       this.#balance+=amount
    }

    withdraw(amount)
    {
        this.#balance-=amount
    }
}
const bankaccount = new BankAccount("Neethu",10000)
//bankaccount.accountHolder="Anu"
console.log(bankaccount.accountHolder)
//bankaccount.#balance = 5000 - cannot access the private variable outside the class
bankaccount.showBalance()
bankaccount.deposite(1000)
bankaccount.showBalance()
bankaccount.withdraw(500)
bankaccount.showBalance()

