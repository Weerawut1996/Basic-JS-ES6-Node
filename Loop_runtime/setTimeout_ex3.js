 function out_in_0(num) {
   console.log(num); 
   num--;
   if (num <= 0) {
       console.log("Countdown finished!");
       return; // หยุดการทำงานของฟังก์ชันเมื่อ num <= 0
   }

   // เรียกใช้งาน setTimeout() เพื่อเรียกตัวเองซ้ำ ๆ โดยลด num ลงไปด้วย
   setTimeout(function() {           
       out_in_0(num);
   }, 1000); // ล่าช้าเวลา 1 วินาที (1000 มิลลิวินาที)
}

// เรียกใช้งานฟังก์ชัน out_in_0() โดยส่งค่าเริ่มต้นเป็น 5
out_in_0(5);