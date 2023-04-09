
var Num1=prompt("ขอเลขเด็ด")
var Num2= (Math.floor(Math.random()*101))
var Re1=""
if (Num1==Num2) {
    Re1="คุณถูกรางวัล"
} else {
    Re1="คุณไม่ถูกรางวัล"
}   
document.getElementById("result").innerHTML = Num2
document.getElementById("result1").innerHTML = Num1
document.getElementById("result2").innerHTML = Re1
console.log(Re1)
