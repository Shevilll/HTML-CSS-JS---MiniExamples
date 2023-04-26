const board = document.querySelector("#board")
const context = board.getContext("2d")
const scoretext = document.querySelector("#score")
const reset = document.querySelector("#reset")
const gamewidth = board.width
const gameheight = board.height

const boardbg = "white"
const snakecolor = "red"
const snakeborder = "black"
const foodcolor = "yellow"

const unitsize = 25
let running = false
let xvel = unitsize
let yvel = 0
let foodx;
let foody;
let score = 0

let snake = [
    {x:unitsize*4, y:0},
    {x:unitsize*3, y:0},
    {x:unitsize*2, y:0},
    {x:unitsize, y:0},
    {x:0, y:0}
]

window.addEventListener("keydown",changedir)
reset.addEventListener("click",resetgame)

gamestart()

function gamestart(){
    running = true
    scoretext.textContent = score
    createfood()
    drawfood()
    nexttick()
}

function nexttick(){
    if (running){
        setTimeout(() => {
            clearboard()
            drawfood()
            movesnake()
            drawsnake()
            checkgameover()
            nexttick()
        },75)
    }
    else{
        displaygameover()
    }
}

function clearboard(){
    context.fillStyle = boardbg
    context.fillRect(0,0,gamewidth,gameheight)
}

function createfood(){
    function randomfood(min, max){
        const randnum = Math.round((Math.random() * (max-min) + min) / unitsize) * unitsize
        return randnum
    }
    foodx = randomfood(0,gamewidth-unitsize)
    foody = randomfood(0,gameheight-unitsize)

}

function drawfood(){
    context.fillStyle = foodcolor
    context.fillRect(foodx,foody,unitsize,unitsize)
}

function movesnake(){
    const head = {x: snake[0].x + xvel,
                  y: snake[0].y + yvel}
    snake.unshift(head)
    if (snake[0].x == foodx && snake[0].y == foody){
        score++
        scoretext.textContent = score
        createfood()
    }
    else{
        snake.pop()
    }
}

function drawsnake(){
    context.fillStyle = snakecolor
    context.strokeStyle = snakeborder
    snake.forEach(snakepart => {
        context.fillRect(snakepart.x,snakepart.y,unitsize,unitsize)
        context.strokeRect(snakepart.x,snakepart.y,unitsize,unitsize)
    })
}

function changedir(){
    const key = event.keyCode

    const left = 37
    const up = 38
    const right = 39
    const down = 40

    const w = 87
    const a = 65
    const s = 83
    const d = 68

    const goingup = (yvel == -unitsize)
    const goingdown = (yvel == unitsize)
    const goingright = (xvel == unitsize)
    const goingleft = (xvel == -unitsize)

    switch(true){
        case(key == left || key == a && !goingright):
            xvel = -unitsize
            yvel = 0
            break
        case(key == up || key == w && !goingdown):
            yvel = -unitsize
            xvel = 0
            break
        case(key == right || key == d && !goingleft):
            xvel = unitsize
            yvel = 0
            break
        case(key == down || key == s && !goingup):
            yvel = unitsize
            xvel = 0
            break
    }
}

function checkgameover(){
    switch(true){
        case(snake[0].x<0):
            running = false
            break
        case(snake[0].x>gamewidth):
            running = false
            break
        case(snake[0].y<0):
            running = false
            break
        case(snake[0].y>gameheight):
            running = false
            break
    }
    for (let i = 1; i<snake.length;i++){
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false
        }
    }
}

function displaygameover(){
    context.font = "50px consolas"
    context.fillStyle = "black"
    context.textAlign = "center"
    context.fillText("Game Over",gamewidth/2,gameheight/2)
    running = false
}

function resetgame(){
    if (running == false){
        score = 0
        xvel = unitsize
        yvel = 0
        snake = [
            {x:unitsize*4, y:0},
            {x:unitsize*3, y:0},
            {x:unitsize*2, y:0},
            {x:unitsize, y:0},
            {x:0, y:0}
        ]
        gamestart()
    }
}