const player1Turn = true;
const player1 = prompt('player1');
const player2 = prompt('player2');

let playerName1 = document.getElementById('player1');
let playerName2 = document.getElementById('player2');

playerName1.textContent = player1;
playerName2.textContent = player2;

const rollDice = document.getElementById('rollDice')
const diceImage = document.getElementsByTagName("img")[0];
let currentScore1 = document.getElementById('currentScore1');
let currentScore2 = document.getElementById('currentScore1');
let totalScore1 = document.getElementById('totalScore1');
let totalScore2 = document.getElementById('totalScore2')

let currentScoreHtml1 = document.getElementById('currentScore1');
let currentScoreHtml2 = document.getElementById('currentScore2');



currentScore1 = 0;
currentScore2 = 0;

rollDice.addEventListener('click', () =>   {
    let numberOfDice = Math.ceil(Math.random() * 6) 

    diceImage.src = `./images/${numberOfDice}.png`

    if(numberOfDice == 1){
        player1Turn = !player1Turn
        alert(`turn change ${player1Turn ? playerName1.textcontent : playerName2.textcontent}`)
        currentScoreHtml1.textContent = currentScore1 = 0;

        if(player1Turn){
            currentScoreHtml1.textcontent = currentScore1 = 0
        } else{
            currentScoreHtml2.textcontent = currentScore2 = 0
        }
    } else {
        if(player1Turn)
          currentScoreHtml1.textcontent = currentScore1 += numberOfDice;
        else{
          currentScoreHtml2.textcontent = currentScore2 += numberOfDice;
        }
    }
})