//self containing code to avoid global variables
const game = () => {
    let pscore = 0;
    let cscore = 0;


    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introscreen = document.quarySelector('.intro');
        const match = document.quarySelector('.match');
        //everytime we click lets play something will appear
        playBtn.addEventListener('click', () => {
            introscreen.classList.add('fadeOut')
        });
    };
    //call all the inner function
    startGame();
}

//start game fun
game();
