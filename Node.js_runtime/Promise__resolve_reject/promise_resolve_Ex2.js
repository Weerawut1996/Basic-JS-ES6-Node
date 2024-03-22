// your must install "node.js" in your PC
// run  command  --> node promise_resolve_Ex2.js
// or run        --> node Promise__resolve_reject/promise_resolve_Ex2.js
// or run        --> node Node.js_runtime/Promise__resolve_reject/promise_resolve_Ex2.js


// same promise_resolve_Ex1 but shorter
let promise = new Promise((resolve, reject) => {
   setTimeout(() => { resolve('Hello');}, 1000);
}).then(value => {
   console.log(`Resolved: ${value}`);
});
console.log('Main program');