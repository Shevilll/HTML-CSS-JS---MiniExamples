update()
setInterval(update,1000)

function update(){
    let clock = new Date()

    let time = clock.toLocaleTimeString()
    let date = clock.toLocaleDateString()

    document.getElementById("time").innerHTML = `Time: ${time}`
    document.getElementById("date").innerHTML = `Date: ${date}`
}