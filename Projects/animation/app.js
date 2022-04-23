
day = true

setInterval(function () {
    var sky = document.getElementsByClassName('sky')[0]
    var sun = document.getElementsByClassName('sun')[0]
    var grass = document.getElementsByClassName('grass')[0]

    if (day) {
        sky.style.backgroundColor = "grey";
        sun.src = "moon.png"
        grass.style.backgroundColor = "green";
        
        day = false

    }
    else {
        sky.style.backgroundColor = "lightblue";
        sun.src = "sun.png"
        grass.style.backgroundColor = "#61C235";
        
        day = true
    }

}, 4000)