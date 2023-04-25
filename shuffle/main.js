let arr = [1,2,3,4,5,6,7,8,9,"A","Q","J","K"]
let newarr = []

document.getElementById("before").innerHTML = `Before Shuffling: ${arr}`

function shuffle(){
    let len = arr.length
    while (newarr.length != len){
        let randomindex = Math.floor((Math.random()*arr.length))
        newarr.push(arr[randomindex])
        arr.splice(randomindex,1)
    }
}
shuffle()
document.getElementById("after").innerHTML = `After Shuffling: ${newarr}`
