let num = 0;

document.getElementById("decrease").onclick = function(){
    num -= 1
    document.getElementById("head").innerHTML = num
}

document.getElementById("reset").onclick = function(){
    num = 0
    document.getElementById("head").innerHTML = num
}

document.getElementById("increase").onclick = function(){
    num += 1
    document.getElementById("head").innerHTML = num
}