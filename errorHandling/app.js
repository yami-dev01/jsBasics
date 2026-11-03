

// Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount , balance){
    try{
        if(amount < 0){
            throw new Error("amount should be greatear than 0")
        }
        if(amount > balance){
            throw new Error("not enough balance");
        }   
    }catch(error){
        console.log(error.message);
    }
}

//processPayment(-1 , 10);


//Implement a custom error type ValidationError using constructor functions to handle form validation errors

function ValidationError(type , message){
    this.type = type;
    this.message = message;
}



const formValidation = (formData) => {
    try{
        if(formData.password.length < 8){
            throw new ValidationError("invalid input" , "passowrd should be of at least 8 length")
        }
        if(formData.age < 0){
            throw new ValidationError("invalid inputs" , "age should be greater than 0")
        }
    }catch(e){
        console.log(e.message)
    }
}

const formData = {
    password : "123",
    age : -1
}

formValidation(formData);


//Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str){
    try{
        const parsedString = JSON.parse(str);
    }catch(error){
        console.log(error.message);
        return "invalid json";
    }
}

const parsedData = parseJson();
console.log(parsedData)

