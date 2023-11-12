let player1Turn = true;

let playerName1 = document.getElementById('player1');
let playerName2 = document.getElementById('player2');

let rollDice = document.getElementById('rollDice')
let diceImage = document.getElementById("imagesall");
let currentScore1 = document.getElementById('currentScore1');
let currentScore2 = document.getElementById('currentScore2');
let totalScore1 = document.getElementById('totalScore1');
let totalScore2 = document.getElementById('totalScore2')
let turnChangeMessage = document.getElementById('turnChangeMessage');

let currentScoreHtml1 = document.getElementById('currentScore1');
let currentScoreHtml2 = document.getElementById('currentScore2');





 totalScore1.textContent = 0;   
 totalScore2.textContent = 0;

function submit1(){
    const player1Input = document.querySelector('#player1Input');   
    playerName1.textContent = player1Input.value || 'player 1';
    document.getElementById('1display').style.display = 'none'
}

function submit2(){    
    const player2Input = document.querySelector('#player2Input');    
    playerName2.textContent = player2Input.value || 'player 2';
    document.getElementById('2display').style.display = 'none'
    
}

currentScore1 = 0;
currentScore2 = 0;

rollDice.addEventListener('click', () => {
    let numberOfDice = Math.ceil(Math.random() * 6);

   diceImage.src = `./images/${numberOfDice}.PNG`;

    if (numberOfDice == 1) {
        player1Turn = !player1Turn;
        turnChangeMessage.textContent = `Turn : ${player1Turn ? playerName1.textContent : playerName2.textContent}`;
        currentScoreHtml1.textContent = currentScore1 = 0;
        currentScoreHtml2.textContent = currentScore2 = 0;
    } else {
        if (player1Turn) {
            currentScoreHtml1.textContent = currentScore1 = numberOfDice;
            totalScore1.textContent = String(Number(totalScore1.textContent) + numberOfDice);
        } else {
            currentScoreHtml2.textContent = currentScore2 = numberOfDice;
            totalScore2.textContent = String(Number(totalScore2.textContent) + numberOfDice);
        }
    }
}); 





