let num;

document.getElementById("button").onclick = check;

function check(){
        num = Math.round(Math.random()*100)
        document.getElementById("label").innerHTML = num
}
