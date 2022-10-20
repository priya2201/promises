//callback hell / problem of inversion of control
const cart = ["kurta", "pajama", "shirts"]

//console.log(cart[2]);
createOrder(cart, (orderId) => {
    proceedToPayment(orderId, (paymentInfo) => {
        showOrderSummary(paymentInfo, (updatewalletbalance) => {
            updateBalance(updatewalletbalance, (readytodeliver) => {
                deliverSoon(readytodeliver, (msg) => {
                    console.log(msg)
                });

            })
        });
    });
});

//creating a basic promise by consumer  

// const promise=createOrder(cart);

//{data:undefined}
// promise.then(function(orderId){
//     proceedToPayment(orderId);
//     });


function createOrder(cart, callback) {
    if (cart.length > 0) {
        return callback(true)
    } else {
        return callback(false)
    }
}

function proceedToPayment(orderId, callback) {
    console.log(`The following person is now proceed to payment with order id ${cart.length}`);
    return callback({
        name: 'pia',
        amount: 5000
    });

}

function showOrderSummary(paymentInfo, callback) {

    if (paymentInfo.name === 'pia' || paymentInfo.amount >= 5000) {
        console.log(`${paymentInfo.name} is valid for the id and the amount must be equal or greater than ${paymentInfo.amount}`)
    }


    return callback("see your order summaries")
}

function updateBalance(updatewalletbalance, callback) {
    console.log(updatewalletbalance);
    return callback("see your walletbalance");
}



function deliverSoon(readytodeliver, callback) {
    console.log(readytodeliver)
    return callback("waoww!! the product delivered shortly")

}







   //creating a promise object of fetch and returning an asynchronous operation after eventual completion of a promise object


//    const github_api="https://api.github.com/users/akshaymarch7" ;
//    const user=fetch(github_api);
//    console.log(user);
// user.then(function(data){
//     console.log(data);

// });



