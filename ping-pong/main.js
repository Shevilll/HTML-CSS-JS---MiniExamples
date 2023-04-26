const game = document.querySelector("#board")
const context = game.getContext("2d")
const score = document.querySelector("#score")
const reset = document.querySelector("#reset")
const width = game.width
const height = game.height

const boardbg = "green"
const p1color = "blue"
const p2color = "red"
const pborder = "black"
const ballcolor = "yellow"
const ballborder = "black"

const ballradius = 13
const pspeed = 20

let intervalId;
let ballspeed = 1
let ballx = width/2
let bally = height/2
let ballxdir = 0
let ballydir = 0
let p1score = 0
let p2score = 0
let p1 = {
    width:25,
    height:100,
    x:0,
    y:0
}
let p2 = {
    width:25,
    height:100,
    x:width-25,
    y:height-100
}

window.addEventListener("keydown",changedir)
reset.addEventListener("click",resetgame)

gamestart()

function gamestart(){
    createball()
    nexttick()
}

function nexttick(){
    intervalId = setTimeout(() => {
        clearboard()
        drawpaddle()
        moveball()
        drawball(ballx,bally)
        checkcollision()
        nexttick()
    },10)
}

function clearboard(){
    context.fillStyle = boardbg
    context.fillRect(0,0,width,height)
}

function drawpaddle(){
    context.strokeStyle = pborder

    context.fillStyle = p1color
    context.fillRect(p1.x,p1.y,p1.width,p1.height)
    context.strokeRect(p1.x,p1.y,p1.width,p1.height)

    context.fillStyle = p2color
    context.fillRect(p2.x,p2.y,p2.width,p2.height)
    context.strokeRect(p2.x,p2.y,p2.width,p2.height)
}

function createball(){
    ballspeed = 1
    if ((Math.round(Math.random())) == 1){
        ballxdir = 1
    }
    else{
        ballxdir = -1
    }
    if ((Math.round(Math.random())) == 1){
        ballydir = 1
    }
    else{
        ballydir = -1
    }
    ballx = width/2
    bally = height/2
    drawball(ballx,bally)
}

function moveball(){
    ballx += ballspeed * ballxdir
    bally += ballspeed * ballydir
}

function drawball(ballx,bally){
    context.fillStyle = ballcolor
    context.strokeStyle = ballborder
    context.lineWidth = 2
    context.beginPath()
    context.arc(ballx,bally,ballradius,0,2*Math.PI)
    context.stroke()
    context.fill()
}

function checkcollision(){
    if (bally <= 0+ballradius){
        ballydir *= -1
    }
    if (bally >= height-ballradius){
        ballydir *= -1
    }
    if (ballx <= 0){
        p2score += 1
        updatescore()
        createball()
        return
    }
    if (ballx >= width){
        p1score += 1
        updatescore()
        createball()
        return
    }
    if (ballx <= (p1.x+p1.width+ballradius)){
        if (bally > p1.y && bally < p1.y+p1.height){
            ballx = (p1.x+p1.width) + ballradius
            ballxdir *= -1
            ballspeed += 0.2
        }
    }
    if (ballx >= (p2.x-ballradius)){
        if (bally > p2.y && bally < p2.y+p2.height){
            ballx = p2.x - ballradius
            ballxdir *= -1
            ballspeed += 0.2
        }
    }
}

function changedir(){
    const keypressed = event.keyCode

    const p1up = 87
    const p1down = 83
    const p2up = 38
    const p2down = 40

    switch(keypressed){
        case(p1up):
            if (p1.y > 0){
                p1.y -= pspeed
            }
            break
        case(p1down):
            if (p1.y < height-p1.height){
                p1.y += pspeed
            }
            break
        case(p2up):
            if (p2.y > 0){
                p2.y -= pspeed
            }
            break
        case(p2down):
            if (p2.y < height-p2.height){
                p2.y += pspeed
            }
            break
    }
}

function updatescore(){
    score.textContent = `${p1score} : ${p2score}`
}

function resetgame(){
    p1score = 0
    p2score = 0
    p1 = {
        width:25,
        height:100,
        x:0,
        y:0
    }
    p2 = {
        width:25,
        height:100,
        x:width-25,
        y:height-100
    }
    ballspeed = 1
    ballx = 0
    bally = 0
    ballxdir = 0
    ballydir = 0
    updatescore()
    clearInterval(intervalId)
    gamestart()
}