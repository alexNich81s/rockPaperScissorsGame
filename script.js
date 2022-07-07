const options = document.querySelectorAll('button');
const counter = document.querySelector('.score');
const result = document.querySelector('.message');

let countScore = 0;
let leftover = 0;
for(let x = 0; x < options.length; x++){
    options[x].addEventListener("click", game);
}

function game(e){
    const hands = {
        0: "Rock", 1: "Paper", 2: "Scissors"
    };
    let com = Math.floor((Math.random() * 3));
    let playerSel = e.target.innerText;
    let winner = checkWinner(playerSel, hands[com]);
    if (winner == "Player"){
        countScore++;
        
    }
    else{
        leftover++;
    }
    counter.innerHTML = countScore;
    result.innerHTML = "You picked " + playerSel + " | " + "The computer picked " + hands[com];

}
function checkWinner(player, computer){
    if(player === computer){
        return "Draw";
    }
   if(player === "Rock"){
        if(computer === "Scissors"){
            return "Computer";
        }
        else{
            return "Player";
        }
    }
    if(player === "Scissors"){
        if(computer === "Paper"){
            return "Player";
        }
        else{
            return "Computer";
        }
    }
    if(player === "Paper"){
        if(computer === "Scissors"){
            return "Computer"; 
        }
        else{
            return "Player";
        }
    }
}

