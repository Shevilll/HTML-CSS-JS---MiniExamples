document.getElementById("submit").onclick = function(){
    let temp = Number(document.getElementById("temp").value)
    if (document.getElementById("cel").checked){
        document.getElementById("ans").innerHTML = `Temperature: ${toC(temp)}`
    }
    else if (document.getElementById("fah").checked){
        document.getElementById("ans").innerHTML = `Temperature: ${toF(temp)}`
    }
    else{
        document.getElementById("ans").innerHTML = `Select a unit!!`

    }
}


function toC(temp){
    return `${((temp - 32)*(5/9))}˚C`;
}

function toF(temp){
    return `${temp*(9/5)+32}˚F`;
}