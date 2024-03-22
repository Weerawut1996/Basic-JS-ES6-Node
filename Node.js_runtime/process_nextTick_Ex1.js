// run command  --> node process_nextTick.js
// run command  --> node Node.js_runtime/process_nextTick.js
console.log('console.log line 3');

setImmediate(() => {
   console.log('setImmediate(()={...})');
});

setTimeout(() => {
   console.log('setTimeout(() => {...},0)');
}, 0);

process.nextTick(() => {
   console.log('process.nextTick(() => {...})');
});
console.log('console.log line 16');

// number 1 => console.log line 3
// number 2 => console.log line 16 
// number 3 => process.nextTick(() => {...})
// number 4 => setTimeout(() => {...},0)
// number 5 => setImmediate(()={...})