const intervalID = setInterval(myCallback, 1000, 'Parameters value in line 1', 1125);
let num = 5;

function myCallback(a, b) {
   const outputA = a + " :";
   num <= 0 ? StopInterval() : console.log(outputA, num, ',', b);
   num -= 1;

   //setInterval() จะทำให้ param a,b มีค่าเท่ากับ param ใน Line 1 เสมอ
   b -= 1; //ดังนั้น  b -= 1; จึงไม่ทำงาน
}

function StopInterval() {
   clearInterval(intervalID);
   console.log('-----END-----');
   return
}
