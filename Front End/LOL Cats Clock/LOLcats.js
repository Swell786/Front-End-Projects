
// make body Animation

bodyColours = [
    "(rgb(249, 152, 141),rgb(230, 215, 169),rgb(249, 152, 141) 30%)",
    "(rgb(230, 215, 169),rgb(249, 152, 141),rgb(230, 215, 169) 30%)",
  ];
  i = 0;
  function changeBodyColour() {
    document.getElementById("container").style.backgroundImage =
    "repeating-linear-gradient" + bodyColours[i];
    if (i >= 1) i = 0;
    else i++;
  }



// make banner animated

var c = 0;
var b = true;
var colourArray = [
    'rgb(179, 51, 111)',
    'rgb(177, 76, 123)',
    'rgb(250, 132, 152)',
    'rgb(250, 134, 153)',
    'rgb(251, 128, 149)',
    'rgb(250, 141, 159)',
    'rgb(249, 146, 163)',
    'rgb(247, 143, 161)',
    'rgb(247, 143, 161)',
];

var bannerArray = document.querySelector('.banner').children

changingColorsArray = [...colourArray];

function applyColors(children, colorArr) {
    for (let i = 0; i < children.length; i++) {
        children[i].style.color = colorArr[i];
    }
}


function arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
}

function reverseTimer(p) {
    c++;
    if (c % 7 === 0) b = !p;
}

myInterval = setInterval(() => {
    reverseTimer(b);
    
    arrayRotate(changingColorsArray, b);
    
    applyColors(bannerArray, changingColorsArray);
    
}, 105);





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
    
    document.getElementById("time").innerHTML = `${klock} ${x}` // converted to template string
}


// Image change

function img(){
    
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
    
    setInterval(() => {
        changeBodyColour();
        clock();
    }, 1000);

    myVar = setInterval(img, 1000) 
    
    // party    
    var pg = document.getElementsByClassName("p")[0]
        p = document.getElementById('parte')
    function parte() {
        
        if(p.innerHTML == "Party Off!!"){
            myVar = setInterval(img, 0)
            pg.style.color = 'rgb(110, 16, 76)'
            p.innerHTML = "Party!"
        } else {
            clearInterval(myVar)
            document.getElementById("img").src = "./Images/parte.jpg"
            pg.innerHTML = "PAAARTEEEE!!"
            pg.style.color = "rgb(255, 216, 189)"
            p.innerHTML = "Party Off!!"
        }

    }

