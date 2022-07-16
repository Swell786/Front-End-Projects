
function clock(){
    time = new Date()
    h = time.getHours()
    m = time.getMinutes()
    s = time.getSeconds()

    function checkTime(x){
    if(x < 10) {
        x = "0" + x
    }
    return x
}

    h = checkTime(h) 
    m = checkTime(m)
    s = checkTime(s)

    if(h < 12){
        x = "AM"
    } else if (h > 12) {
        x = "PM"
    }
    
    h = h % 12

    if(h === 0){
        h = 12
    }
    
    let klock = h + ":" + m + ":" + s 

    document.getElementById("time").innerHTML = `${klock} ${x}` // converted to template string (refactored)
}

setInterval(clock, 1000)

// Image change

function img(){
    document.getElementsByClassName("p")[0].style.color = "rgb(161, 37, 37)"
    
    imgDate = new Date()

    ht = imgDate.getHours() 
    mt = imgDate.getMinutes()
    st = imgDate.getSeconds()

    w = document.getElementById("wakeup").value
    l = document.getElementById("lunch").value
    s = document.getElementById("sleep").value

    if(0 <= ht && ht < 4 && w == 1 ) {
        document.getElementById("img").src = "./Images/wakeup.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Wakey Wakey!!"
    } else if (4 <= ht && ht < 6 && w == 2) {
        document.getElementById("img").src = "./Images/wakeup.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Wakey Wakey!!"
    } else if (6 <= ht && ht < 8 && w == 3) {
        document.getElementById("img").src = "./Images/wakeup.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Wakey Wakey!!"
    } else if (8 <= ht && ht < 10 && w == 4) {
        document.getElementById("img").src = "./Images/wakeup.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Wakey Wakey!!"
    } else if (10 <= ht && ht < 12 && w == 5) {
        document.getElementById("img").src = "./Images/wakeup.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Wakey Wakey!!"
    } else if(12 <= ht && ht < 14 && l == 6 ) {
        document.getElementById("img").src = "./Images/lunch.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Chowtime!!"
    } else if (14 <= ht && ht < 16 && l == 7) {
        document.getElementById("img").src = "./Images/lunch.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Chowtime!!"
    } else if (16 <= ht && ht < 18 && s == 8) {
        document.getElementById("img").src = "./Images/sleep.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Nighty Night!!"
    } else if (18 <= ht && ht < 20 && s == 9) {
        document.getElementById("img").src = "./Images/sleep.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Nighty Night!!"
    } else if (20 <= ht && ht < 22 && s == 10) {
        document.getElementById("img").src = "./Images/sleep.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Nighty Night!!"
    } else if (22 <= ht && ht < 24 && s == 11) {
        document.getElementById("img").src = "./Images/sleep.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "Nighty Night!!"
    } else {
        document.getElementById("img").src = "./Images/default.jpg"
        document.getElementsByClassName("p")[0].innerHTML = "YES?"
    } }

    myVar = setInterval(img, 1000)  

    // party    

    function parte(){
        p = document.getElementById("parte").innerHTML
        
        if(p == "Party Off!!"){
            myVar = setInterval(img, 1000)
            document.getElementById("parte").innerHTML = "Party!"
        } else {
            clearInterval(myVar)
            document.getElementById("img").src = "./Images/parte.jpg"
            
            pg = document.getElementsByClassName("p")[0]
            pg.innerHTML = "PAAARTEEEE!!"
            pg.style.color = "FFD8BD"
            
            p = document.getElementById("parte").innerHTML = "Party Off!!"}

    } 
    

