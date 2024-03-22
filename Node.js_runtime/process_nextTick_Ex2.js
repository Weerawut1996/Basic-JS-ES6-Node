// run command  --> node process_nextTick.js
// run command  --> node Node.js_runtime/process_nextTick_Ex2.js

// ใช้ setTimeout แทน process.nextTick เพื่อให้ผลลัพธ์ชัดเจนขึ้น
console.log('Start');

// สร้างฟังก์ชัน
function myFunction() {
    console.log('Inside myFunction');
}

// ใช้ setTimeout แทน process.nextTick เพื่อให้ผลลัพธ์ชัดเจนขึ้น
setTimeout(() => {
    console.log('Inside ...setTimeout()...');
}, 0);

process.nextTick(() => {
    console.log('Inside ...process.nextTick()');
});

// วนลูปและเรียกใช้ฟังก์ชัน
console.log('--------------');
for (let i = 1; i <= 2; i++) {
    console.log('Inside loop:', i);
    myFunction();
}
console.log('--------------');
console.log('End');


// Start
// --------------
// Inside loop: 1
// Inside myFunction
// Inside loop: 2
// Inside myFunction
// --------------
// End
// Inside ...process.nextTick()
// Inside ...setTimeout()...