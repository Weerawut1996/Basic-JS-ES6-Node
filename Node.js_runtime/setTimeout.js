// your must install "node.js" in your PC
// run command  --> node setTimeout.js
// run command  --> node Node.js_runtime/setTimeout.js
function greet() {
   console.log('Hello! Dear.');
 }
 
 setTimeout(greet, 2000); // เรียก greet() หลังจากผ่านไป 2 วินาที
 // ผลลัพธ์: จะlog "Hello! Dear" หลังจากผ่านไป 2 วินาที
 /*------------------------------------------------------- */

 function greetName(name) {
   console.log('Hello, ' + name + '!');
 }
 
 setTimeout(greetName, 3000, 'John'); // เรียก greet('John') หลังจากผ่านไป 3 วินาที
 // ผลลัพธ์: จะlog "Hello, John!" หลังจากผ่านไป 3 วินาที
 /*------------------------------------------------------- */

 function countDown(num) {
   console.log(num);
   if (num >= 1) {
     setTimeout(countDown, 1000, num - 1); // เรียก countDown(num-1) หลังจากผ่านไป 1 วินาที
   }
 }
 
 countDown(5);