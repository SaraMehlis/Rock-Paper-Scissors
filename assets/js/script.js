//self containing code to avoid global variables
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start  the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        //everytime we click lets play something will appear
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn');
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });
      
        //computer options , generate random number between 0-1
        const computerOptions = ['rock', 'paper, scissors'];
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber];
           //call compare hands

        });
    });
};


setTimeout(() => {
    //Here is where we call compare hands
    compareHands(this.textContent, computerChoice);

    //update images ????
    playerHand.src = `./assets/${this.textContent}.png`;
    computerHand.src = `./assets/${computerChoice}.png`;
}, 2000);


//animation
playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
};

const compareHands = (playerChoice, computerChoice) =>{
    //update text
    const winner = document.querySelector('.winner');
    //if tie
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a tie';
        return;
    }
//if rock
if(playerChoice === 'rock'){
    if(computerChoise === ' scissors'){
        winner.textContent = ' player wins';
        pScore++;
        updateScore();
        return;
    }else{
        winner.textContent = 'computer wins';
        return;
    }
}
//if paper
if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
}


//if scissors
if(playerChoice === 'scissors'){
    if(computerChoise === ' rock'){
        winner.textContent = 'computer Wins';
        cScore++;
        updateScore(); 
        return;
    }else{
        winner.textContent = 'player Wins';
        pScore++;
        updateScore();
        return;
    }
}
};

    //call all the inner function
    startGame();
    playMatch();
};

//start game fun
game();
