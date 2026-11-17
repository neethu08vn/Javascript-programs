function loginUser(username,password,callback)
{
    console.log("User logged in")
    callback("Neethu")
}

function getOrder(userid,callback)
{
    console.log("Order Retrieved")
    callback("order101")
}
function orderDetails(orderid,callback)
{
    console.log("Order details retrieved")
    callback("order details")
}
function getPaymentStatus(payment,callback)
{
    console.log("Payment status retrieved")
    callback("payment status")
}

loginUser("Neethu","password123",function(user)
{
    getOrder(user, function(order)
    {   
        orderDetails(order,function(details)
        {
            getPaymentStatus(details,function(paymentstatus)
            {
                console.log("final status is "+paymentstatus)
            })
        })
    })
})