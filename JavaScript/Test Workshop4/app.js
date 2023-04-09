function arA(){
    alert("คุณได้เกรด A")
}

function arBp(){
    alert("คุณได้เกรด B+")
}

function arB(){
    alert("คุณได้เกรด B")
}
function arCp(){
    alert("คุณได้เกรด C+")
}
function arC(){
    alert("คุณได้เกรด C")
}
function arDp(){
    alert("คุณได้เกรด D+")
}
function arD(){
    alert("คุณได้เกรด D")
}
function arF(){
    alert("มึงได้ F ไอ้ฟายเรียนยังไงของมึง")
}

let score = prompt("กรุณาใส่คะแนนของท่าน: ")

if (score>=80) {
    document.getElementById("result").innerHTML=" คุณได้เกรด A "
    arA()
} else if(score>=75) {
    document.getElementById("result").innerHTML=" คุณได้เกรด B+ "
    arBp()
}else if(score>=70) {
    document.getElementById("result").innerHTML=" คุณได้เกรด B"
    arB()
}else if(score>=65) {
    document.getElementById("result").innerHTML=" คุณได้เกรด C+ "
    arCp()
}else if(score>=60) {
    document.getElementById("result").innerHTML=" คุณได้เกรด C "
    arC()
}else if(score>=55) {
    document.getElementById("result").innerHTML=" คุณได้เกรด D+ "
    arDp()
}else if(score>=50) {
    document.getElementById("result").innerHTML=" คุณได้เกรด D "
    arD()
}else {
    document.getElementById("result").innerHTML=" คุณได้เกรด F "
    arF()
}
