const player1Turn = true;
const player1 = prompt('player1');
const player2 = prompt('player2');



let currentScore = 0;



const rollDice = document.getElementById('rollDice')
const diceImage = document.getElementsByTagName("img")[0];
let currentScore = document.getElementById('currentScore');
let totalScore1 = document.getElementById()
let totalScore2 = document.getElementById()

rollDice.addEventListener('click', () =>   {
    let numberOfDice = Math.ceil(Math.random() * 6) 

    diceImage.src = `./asses/${numberOfDice}.png`

    if(numberOfDice == 1){
        player1Turn = !player1Turn
        alert(`turn change ${player1Turn ? playerName1.textcontent : playerName2.textcontent}`)
        currentScoreHtml.textcontent = currentScore = 0;
        if(player1Turn){
            currentScoreHtml1.textcontent = currentScore = 0
        } else{
            currentScoreHtml2.textcontent = currentScore = 0
        }
    } else {
        if(player1Turn)
          currentScoreHtml.textcontent = currentScore += numberOfDice;
        else{
          currentScoreHtml.textcontent = currentScore += numberOfDice;
        }
    }
})