console.log("log") 
console.log("log")     //### แสดงผลใน Log F12
console.log("log") 

                //## ใน JavaScript เวลาใช้ตัวแปลต้องใส่ตัวเล็กใหญ่ให้แป๊ะ ไม่งั้น Erorr
var name = "Gata"
var fistname = "Jetsada"   //### เก็บตัวแปร 
var lastname = "Wichainet"
var age = 23

console.log(name)
name = "Gata Kuy"   //### TEST เปลี่ยน ค่าในตัวแปร
console.log(name)
console.log(fistname,lastname)
// ถ้ามี "" = Sting ถ้าใส่ตัวเลขดื้อๆเลย จะเป็นข้อมูลตัวเต็มหรือ Number  
//alert(fistname+lastname)  ### แจ้งเตือนขึ้นมา (แจ้งเตือนอะไร)
//alert(typeof name)      ### ให้แสดง Type ข้อมูล 
//alert(typeof 12.0111)
console.log([10+10]*2)    //### TEST คำนวณคณิตศาสตร์
console.log(fistname+lastname)  //### TEST ใช้กับ Sting
console.log(age+2)
{
    var x = 2     //### Var เป็น Groble ค่าใช้ร่วมกัน
    let y = 20    //### Let ใช้แค่ใน {} เท่านั้น ใช้แล้วทิ้ง
    //alert(y)
}
//alert(x)

var Phone=prompt("ขอใจแลกเบอร์โทรได้ไหม")
console.log(Phone+typeof Phone)

