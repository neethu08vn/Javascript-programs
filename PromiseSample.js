function loginUser(username,password)
{
    return new Promise((resolve,reject)=>{
        console.log("user logged in with username" +username +"and password" +password)
        resolve("neethu")

    }
)}

function getOrder(user)
{
    return new Promise((resolve,reject)=>{
        console.log("Order retrieved for user" +user)
        resolve("order1")
    })
}
function orderDetails(order)
{
    return new Promise((resolve,reject)=>{
        console.log("order details retrieved for order" +order)
        resolve("Success")
    })
}
function getPaymentStatus(payment)
{
    return new Promise((resolve,reject)=>{
        console.log("Payment status retrieved for payment" +payment)
        resolve("payment done")
    })
}

loginUser("user1","pwd123")
.then(user=>getOrder(user))
.then(order=>orderDetails(order))
.then(details=>getPaymentStatus(details))
.then(paymentstatus=>console.log("Final status is "+paymentstatus))
.catch(error=>console.log(error))