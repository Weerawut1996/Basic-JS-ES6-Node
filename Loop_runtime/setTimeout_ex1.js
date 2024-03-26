// สร้างฟังก์ชันที่จะถูกเรียกหลังจากผ่านไปเวลาที่กำหนด
function sayHello() {
   console.log("Hello, world!");
 }
 
 // เรียกใช้ setTimeout() เพื่อเรียกใช้งานฟังก์ชัน sayHello() หลังจากผ่านไป 3000 มิลลิวินาที (3 วินาที)
 setTimeout(sayHello, 3000);