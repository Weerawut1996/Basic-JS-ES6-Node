// your must install "node.js" in your PC
// run  command --> node promise_resolve_Ex1.js
// or run       --> node Promise__resolve_reject/promise_resolve_Ex1.js
// or run       --> node Node.js_runtime/Promise__resolve_reject/promise_resolve_Ex1.js
// or run       --> node Node.js_runtime/Promise__resolve_reject/promise_resolve_Ex1.js


let promise = new Promise((resolve, reject) => {
   // resolve have promise _OR_ resolve perfect saccess
   setTimeout(() => {
        resolve('Hello');
   }, 1000); 
});
// promise.then -- doesn't working, if it doesn't last 1000 ms or 1 second. resolve set sting 'Hello'
promise.then(value => {
    console.log(`Resolved: ${value}`);
});

console.log('Main program');