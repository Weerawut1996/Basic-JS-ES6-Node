 function sayHello(message) {
   console.log(message);
 }
 
 // เรียกใช้งาน setTimeout() เพื่อเรียกใช้งานฟังก์ชัน sayHello() โดยส่งข้อความ "Hello, world!" ไปในพารามิเตอร์
 setTimeout(sayHello, 3000, "Hello, world!");
