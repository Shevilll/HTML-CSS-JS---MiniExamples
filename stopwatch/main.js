let time = document.getElementById("timer")
let paused = true
let timer;

let startime=0
let elapsedtime=0
let secs=0
let mins=0
let hrs=0

document.getElementById("start").onclick = function(){
    if (paused){
        paused=false
        startime = Date.now() - elapsedtime
        timer = setInterval(update,1000)
    }
}
document.getElementById("stop").onclick = function(){
    if (!paused){
        paused=true
        clearInterval(timer)
    }
}
document.getElementById("reset").onclick = function(){
    time.textContent = `00:00:00`
    paused = true
    clearInterval(timer)
    elapsedtime = 0

}
function update(){
    elapsedtime = Date.now() - startime

    secs = Math.floor((elapsedtime/1000)%60)
    mins = Math.floor((elapsedtime/60000)%60)
    hrs = Math.floor((elapsedtime/3600000)%60)

    secs = padding(secs)
    mins = padding(mins)
    hrs = padding(hrs)

    time.textContent = `${hrs}:${mins}:${secs}`
    function padding(text){
        if (text < 10){
            return `0${text}`
        }
    }
}