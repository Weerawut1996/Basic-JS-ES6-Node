// run -> node Loop_runtime/setInterval_ex2.js

let intervalId;
let conte;

function sayHello() {
  console.log("Hello, world!");
}

// เริ่มต้นเรียกใช้งานฟังก์ชัน sayHello() ทุกๆ 1 วินาที
console.log('0000^');
intervalId = setInterval(sayHello, 1000);
console.log('1111^');

// หยุดการเรียกใช้งานฟังก์ชันที่ถูกเรียกด้วย setInterval()
clearInterval(intervalId);

