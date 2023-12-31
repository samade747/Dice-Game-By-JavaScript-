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

let box1 = document.getElementById('Section1');
let box2 = document.getElementById('Section2');


 totalScore1.textContent = 0;   
 totalScore2.textContent = 0;

function submit1(){
    const player1Input = document.querySelector('#player1Input');   
    playerName1.textContent = player1Input.value || 'player 1';
    document.getElementById('1display').style.display = 'none';
}

function submit2(){    
    const player2Input = document.querySelector('#player2Input');    
    playerName2.textContent = player2Input.value || 'player 2';
    document.getElementById('2display').style.display = 'none';
    
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
            currentScoreHtml1.textContent = numberOfDice;
            totalScore1.textContent = String(Number(totalScore1.textContent) + numberOfDice);
            document.getElementById('Section1').setAttribute('class', 'col-lg-4 col-sm-12 col-md-6 box ')
            document.getElementById('Section2').setAttribute('class', 'col-lg-4 col-sm-12 col-md-6')
        } else {
            document.getElementById('Section1').setAttribute('class', 'col-lg-4 col-sm-12 col-md-6')
            document.getElementById('Section2').setAttribute('class', 'col-lg-4 col-sm-12 col-md-6 box ')
            currentScoreHtml2.textContent = numberOfDice;
            totalScore2.textContent = String(Number(totalScore2.textContent) + numberOfDice);
        }
    }
}); 

function hold() {
    player1Turn = !player1Turn;
    turnChangeMessage.textContent = `Turn ${player1Turn ? playerName1.textContent : playerName2.textContent}`;
}


function newGame(){   
    console.log('new game')
    player1Turn = true;
    console.log(player1Turn)
    totalScore1.textContent = 0;   
    totalScore2.textContent = 0;
    currentScore1 = 0;
    currentScore2 = 0;
    currentScoreHtml1.textContent = currentScore1 = 0;
    currentScoreHtml2.textContent = currentScore2 = 0;
    turnChangeMessage.textContent = `Turn : ${player1Turn ? playerName1.textContent : playerName2.textContent}`;
}
