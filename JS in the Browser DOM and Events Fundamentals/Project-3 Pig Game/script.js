'use strict';

const playerEl = [document.querySelector('.player--0'),document.querySelector('.player--1')];
const scoreEl = [document.getElementById('score--0'),document.getElementById('score--1')];
const currentEl = [document.getElementById('current--0'), document.getElementById('current--1')];
const nameEl = [document.getElementById('name--0'), document.getElementById('name--1')];

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRename = document.querySelector('.btn--rename');

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal");
const formRename = document.getElementById("rename-form");

let finalScores, currentScore, activePlayer, playing;

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
btnRename.addEventListener('click',openModal)
btnCloseModal.addEventListener('click', closeModal);
formRename.addEventListener('submit',function(e){
    e.preventDefault()
    const formData = new FormData(formRename);
    nameEl[0].innerHTML = formData.get('player1');
    nameEl[1].innerHTML = formData.get('player2');
    formRename.reset();
    closeModal();
})
function resetGame(){
    finalScores=[0,0]
    currentScore=0;
    activePlayer=0;
    playing = true;

    diceEl.classList.add('hidden');
    scoreEl.forEach(score => {
        score.textContent = 0
    })
    currentEl.forEach(curScore => {
        curScore.textContent = 0
    })
    playerEl.forEach(player=>{
        player.classList.remove("player--winner");
    })
    playerEl[1].classList.remove('player--active');
    playerEl[0].classList.add('player--active');

}
resetGame();
function setCurrentScore(){
    currentEl[activePlayer].textContent = currentScore
}
function setFinalScore() {
    scoreEl[activePlayer].textContent = finalScores[activePlayer];
}

function switchPlayer(){
    currentScore=0;
    setCurrentScore();
    activePlayer=(activePlayer)?0:1;
    playerEl.forEach(player=>{
        player.classList.toggle("player--active")
    });
}
btnRoll.addEventListener('click',function() {
    if(playing){
        let dice_Result = Math.trunc(Math.random() * 6 + 1);
        
        if(diceEl.classList.contains("hidden"))
            diceEl.classList.remove("hidden");
        
        diceEl.src = `dice-${dice_Result}.png`
        
        if(dice_Result > 1){
            currentScore += dice_Result;
            setCurrentScore();
        }else{
            switchPlayer();
        }
    }
})
btnHold.addEventListener('click',function(){
    if(playing){
        finalScores[activePlayer] += currentScore;
        setFinalScore()
        if(finalScores[activePlayer]>=100){
            playing= false;
            diceEl.classList.add('hidden');
            celebrate(nameEl[activePlayer].textContent);
            playerEl[activePlayer].classList.add("player--winner");
            playerEl[activePlayer].classList.remove("player--active");
        }else{
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click',resetGame);

const winnerOverlay = document.getElementById('winner-overlay');
const text = document.getElementById('winner-text');
const playAgain = document.getElementById('play-again');

/* Show overlay when someone wins */
function celebrate(winnerName) {
    text.textContent = `🎉 ${winnerName} Wins! 🎉`;
    winnerOverlay.classList.remove('hidden');
}

/* Hide overlay and reset when the user clicks “Play Again” */
playAgain.addEventListener('click', () => {
    winnerOverlay.classList.add('hidden');
    resetGame()
});