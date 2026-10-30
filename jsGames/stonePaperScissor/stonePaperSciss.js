
function rpsGame(){

    // rock == 1, paper == 2 , scissor == 3 


    let userChoice = prompt("please enter your choice (Rock/Paper/Scissor)");
    userChoice = userChoice.toLowerCase();

    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissor"){
        console.log("please enter a valid input");
        return;
    } 

    const engineChoice = Math.floor(Math.random() * 3) + 1;
    
    if(engineChoice == 1){
        console.log("computers choice is rock")
    }
    else if(engineChoice == 2){
        console.log("computer choice is paper")
    }else{
        console.log("computer choice is scissor")
    }



    if((userChoice == "rock" &&  engineChoice == 3) || (userChoice == "paper" && engineChoice == 1) || (userChoice == "scissor" && engineChoice == 2)){
        console.log("you have won");
    }
    else if((userChoice == "rock" && engineChoice == 1) || (userChoice == "paper" && engineChoice == 2) || (userChoice == "scissor" && engineChoice == 3)){
        console.log("it is a tie")
    }
    else{
        console.log("you have lost")
    }

}


while(true){
    let playAgain = prompt("wanna play again (yes / no)");
    playAgain = playAgain.toLowerCase();
    if(playAgain == "yes"){
        rpsGame()
    }else{
        break;
    }
}