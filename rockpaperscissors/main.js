let player;
let computer;
let result;

const buttons = document.querySelectorAll(".button")

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent
    compturn()
    document.getElementById("player").textContent = `Player: ${player}`
    document.getElementById("comp").textContent = `Computer: ${computer}`
    document.getElementById("result").textContent = `Result: ${winner()}`
}))

function compturn(){
    const n = Math.floor((Math.random()*3)+1)

    switch(n){
        case 1:
            computer = "Rock"
            break
        case 2:
            computer = "Paper"
            break
        case 3:
            computer = "Scissors"
            break
    }
}

function winner(){
    if (player == computer){
        return "Draw"
    }
    else if (computer == "Rock"){
        return (player == "Paper") ? "You Win" : "You Lose"
    }
    else if (computer == "Paper"){
        return (player == "Scissors") ? "You Win" : "You Lose"
    }
    else if (computer == "Scissors"){
        return (player == "Rock") ? "You Win" : "You Lose"
    }
}