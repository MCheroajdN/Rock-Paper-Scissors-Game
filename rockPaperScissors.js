const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      /* I added a secret cheat code here that if the human shots 'bomb', the human wins at all cost when determining the winner irrespective of what the computer shoots*/
      return (userInput);}
       else {
    console.log('Error!, Pls enter either rock, papper or scissors');
      }
    }
     
      const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
       if  (randomNumber === 0) {
          return 'rock';
         }
       else if (randomNumber === 1) {
          return 'paper';
         } 
        else
        {  return 'scissors';
         }
    
        };
        
     /*using switch statement
     switch (randomNumber) {
       case 0: 
          return 'rock';
       case 1:
          return 'paper';
       case 2:
          return 'scissors';
     */
      const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
          return ' The game is a tie!';
        }
        if (userChoice === 'rock') {
          if (computerChoice === 'paper') {
            return 'The computer has won the game and you have lost';
            } else { 
              return ' congrats! You have won the game';}
          }
              
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return ' The computer has won the game and you have lost';
      } else {
        return 'Congrats! You have won the game';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return ' The computer has won the game and you have lost';
      } else {
        return 'Congrats! You have won the game';
      }
        }
    
    
    /* we won't even bother to check what the computer shot (the computerChoice), so at all cost, no matter what the human wins */
        if (userChoice === 'bomb'){
          return 'congrats! You have won the game';
        }
        
      };
      
      const playGame = () => {
        const userChoice = getUserChoice('rock');
        /* if I change this to 'bomb', human will always win all the time */
        const computerChoice = getComputerChoice();
        console.log('You shot '+ userChoice);
        console.log('The computer shot ' + computerChoice);
        
        /*using interpolation
        console.log(`You shot ${userChoice}');
        console.log(`The computer shot ${computerChoice}');
        */
        console.log (determineWinner(userChoice, computerChoice));
      };
      playGame();