
class BankAccount {
    #balance;

    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.#balance = balance;
    }

    // getter
    getBalance() {
        return this.#balance;
    }

    //setter
    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.#balance += amount;
        console.log(`Deposited: ${amount}`);
    }

    
    withdraw(amount) {
        if (amount <= 0 || amount > this.#balance) {
            console.log("not enough balance");
            return;
        }

        this.#balance -= amount;
        console.log(`Withdrawn: ${amount}`);
    }

    // Abstract method
    calculateInterest() {
        throw new Error("calculateInterest() must be implemented");
    }

    displayDetails() {
        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Balance: ${this.#balance}`);
    }
}


// innheritance
class SavingsAccount extends BankAccount {
    constructor(accountHolder, balance, interestRate) {
        super(accountHolder, balance); // initialize field from parent
        this.interestRate = interestRate;
    }

    // Overriding
    calculateInterest() {
        return this.getBalance() * this.interestRate / 100;
    }
}


const savings = new SavingsAccount("Rahul", 10000, 5);

savings.deposit(2000);
savings.withdraw(1000);
savings.displayDetails();

console.log("Interest is", savings.calculateInterest());
