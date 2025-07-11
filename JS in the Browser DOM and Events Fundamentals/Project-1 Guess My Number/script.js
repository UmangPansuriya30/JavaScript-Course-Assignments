'use strict';

let MyNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let easyHighScore = 0;
let mediumHighScore = 0;
let hardHighScore = 0;
let level = 1
console.log(MyNumber)
function updateMessage(message) {
    document.getElementsByClassName("message")[0].innerHTML = message
}
function updateScore(score) {
    document.getElementsByClassName("score")[0].innerHTML = score
}
function updateComponents(flag) {
    document.getElementsByClassName("check")[0].disabled = flag
    document.getElementsByClassName("guess")[0].disabled = flag

}
function resetLevelButton(){
    ["easy", "medium","hard"].forEach(x=>{
        document.getElementsByClassName(x)[0].style.backgroundColor = "#ccc"
        document.getElementsByClassName(x)[0].disabled = false
    })
}
function btnEasy() {
    level = 1;
    resetLevelButton();
    document.getElementsByClassName("easy")[0].style.backgroundColor = "#e97af1"
    document.getElementsByClassName("easy")[0].disabled = true
    PlayAgain();
}

function btnMedium() {
    level = 2;
    resetLevelButton();
    document.getElementsByClassName("medium")[0].style.backgroundColor = "#e97af1"
    document.getElementsByClassName("medium")[0].disabled = true
    PlayAgain();

}
function btnHard() {
    level = 4;
    resetLevelButton();
    document.getElementsByClassName("hard")[0].style.backgroundColor = "#e97af1"
    document.getElementsByClassName("hard")[0].disabled = true
    PlayAgain();
}
function PlayAgain() {
    score = 20 / level;
    MyNumber = Math.trunc(Math.random() * 20 + 1);
    console.log(MyNumber)
    updateMessage("Start Guessing...")
    updateScore(score);
    updateComponents(false);
    document.getElementsByTagName("body")[0].style.backgroundColor = "#222"
    document.getElementsByClassName("number")[0].innerHTML = '?';
    document.getElementsByClassName("guess")[0].value = "";

}
function updateHighScore(score){
    if(level === 1){
        easyHighScore = (score > easyHighScore) ? score : easyHighScore;
        document.getElementsByClassName("easyhs")[0].innerHTML = easyHighScore
    }else if(level === 2){
        mediumHighScore = (score > mediumHighScore) ? score : mediumHighScore;
        document.getElementsByClassName("mediumhs")[0].innerHTML =mediumHighScore;
    }else{
        hardHighScore = (score > hardHighScore) ? score : hardHighScore;
        document.getElementsByClassName("hardhs")[0].innerHTML = hardHighScore ;
    }
}
function btnCheck() {
    let guess = Number(document.getElementsByClassName("guess")[0].value);
    if(!guess){
        updateMessage("📛 No Number Entered")
        return;
    }
    if (guess === MyNumber) {
        updateMessage("Correct Guess 🎉");
        document.getElementsByClassName("number")[0].innerHTML = MyNumber
        document.getElementsByTagName("body")[0].style.backgroundColor = "#60b347"
        updateHighScore(score);
        updateComponents(true);
        return;
    }
    else if (guess !== MyNumber) {
        if (score > 1) {
            updateMessage((guess > MyNumber) ? "Too High! 📈" : "Too Low! 📉")
        }
        else {
            updateMessage("You Lost the Game 🧨");
            updateComponents(true);
            updateScore(0);
        }
        updateScore(--score)
    }
}