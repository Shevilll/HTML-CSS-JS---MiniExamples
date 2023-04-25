let height;
let base;
let hypo;

document.getElementById("button").onclick = function(){
    height = document.getElementById("height").value;
    base = document.getElementById("base").value;
    if (height>0 && base>0) {
        hypo = Math.sqrt((height*height)+(base*base))
        document.getElementById("hypo").innerHTML = "Hypotenuse = " + hypo
    }
    else {
        document.getElementById("hypo").innerHTML = "Enter right values!!"
        
    }
}
