// Site Not Responsive

//NOTE! if variables are declared out of function, button runs function once 

function calcTip(){
    var bill = document.getElementById("bill").value
    var service = document.getElementById("service").value / 100
    var shared = document.getElementById("billshare").value
    
    value = bill * service / shared
    document.getElementById("tip").innerHTML = value.toFixed(2)
}
