

// immediately invoked function
(function js(){
    console.log("this is immediately invoked")
})()




// taking another function as an input
function car(getCar){
    getCar()
} 


car(function(){
    console.log("this is a car");
})





function outer() {
    console.log("outer");

    function inner() {
        console.log("i am inner");
    }
    inner();

}


outer();



// arrow function
const greet = (name) =>{
    console.log("hi " + name);
}


greet("vansh");




