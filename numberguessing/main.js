let ans = Math.floor(Math.random()*10)+1
let guesses = 0

document.getElementById("submit").onclick = function(){
    let guess = document.getElementById("input").value
    guesses++
    if (guess == ans){
        document.getElementById("ans").innerHTML = `${guess} is correct! It took you ${guesses} guesses`
    }
    else if (guess < ans){
        document.getElementById("ans").innerHTML = `Too small`

    }
    else if (guess > ans){
        document.getElementById("ans").innerHTML = `Too Big`
    }
    else{
        document.getElementById("ans").innerHTML= `Enter Correct Value`

    }
}