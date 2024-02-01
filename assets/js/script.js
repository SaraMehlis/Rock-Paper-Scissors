//self containing code to avoid global variables
const game = () => {
    let pscore = 0;
    let cscore = 0;

    //start  the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introscreen = document.quarySelector('.intro');
        const match = document.quarySelector('.match');
        //everytime we click lets play something will appear
        playBtn.addEventListener('click', () => {
            introscreen.classList.add('fadeOut')
            match.classList.add('fadeIn');
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll('options button');
        const playerHand = document.quarySelector('.player-hand');
        const computerHand = document.quarySelector('.computer-hand');
        //computer options , generate random number between 0-1
        const computerOptions = ['rock', 'paper, scissors'];
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoise = computerOptions[computerNumber];
           
        });
    });
};



    //call all the inner function
    startGame();
    playMatch();
};

//start game fun
game();
