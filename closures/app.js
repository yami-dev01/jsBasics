
function outer(){
    let outerVal = 10;

    return function inner(){
        console.log(outerVal);
    }
}

const func = outer();
func();


// this is a banking system

const bankingSystem = (initialBalance)=>{

    let balance = initialBalance;

    return {
        "credit" : (amount) => {
            balance += amount;
            console.log(balance);
        },
        "debit" : (amount) =>{
            balance -= amount;
            console.log(balance)
        },
        "getBalance" : () => {
            console.log(balance);
        }
    }


}


const myAccount = bankingSystem(1000);

myAccount.credit(100);
myAccount.debit(500);
myAccount.getBalance();



// this is an counter

function counter(){
    let currCount = 0;

    return function(){
        currCount++;
        console.log(currCount)
    }

}

const timer = counter();
document.getElementById("counterButton").addEventListener("click" , timer)









