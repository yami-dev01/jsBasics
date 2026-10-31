

function guessingGame(){

    
    let actualNo = Math.floor(Math.random() * 10) + 1;
    let NoOfguesses = 1;

    let prevGuess = -1;// whether the prev guess of user was grerater or smaller 1-> higher , 0->lower

    while(true){
        let userChoice;
        if(prevGuess == -1){
            userChoice = prompt("guess a no in between 1 to 10");
        }else if(prevGuess == 1){
            userChoice = prompt(" previous guess was higher guess again");
        }else{
            userChoice = prompt("previous guess was smaller guess again");
        }
        
        // if user doent enter an number
        userChoice = Number(userChoice);
        if(!Number.isInteger(userChoice)){
            alert("enter a valid no");
            prevGuess = -1;
            continue
        }
        
        

        if(userChoice == actualNo){
            return NoOfguesses;
        }else if(userChoice > actualNo){
            NoOfguesses++;
            prevGuess = 1;
            continue;
        }else{
            NoOfguesses++;
            prevGuess = 0;
            continue;
        }
    }


}



let previousGuessTaken = -1;

while(true){
    let playAgain;
    if(previousGuessTaken == -1){
        playAgain = prompt("play a guess game (yes / no)");
    }else{
        playAgain = prompt("you took " + previousGuessTaken + " guesses for previous guess, play again(yes / no)" );
    }
    
    playAgain = playAgain.toLowerCase();
    if(playAgain == "yes"){
        previousGuessTaken = guessingGame();
    }else{
        break;
    }
}