// your must install "node.js" in your PC
// run command  --> node rejecting_promise.js
// or run       --> node Promise__resolve_reject/rejecting_promise.js
// or run       --> node Node.js runtime/Promise__resolve_reject/rejecting_promise.js

function evenPromise(number) {
   return new Promise((resolve, reject) => {
       if (number % 2 == 0) {
           resolve(`${number} is an even number`);
       } else {
           reject(new Error(`${number} is not an even number`))
       }
   });
}

// if resolve() working, use .then()
// if have err and resolve working, use .catch() to get new Error from reject
evenPromise(2).then((value) => {
   console.log(value);
}).catch(err => {
   console.log(err.toString());
});

evenPromise(3).then((value) => {
   console.log(value);
}).catch(err => {
   console.log(err.toString());
});

evenPromise(5).then((value) => {
   console.log(value);
}).catch(err => {
   console.log(typeof err);   
   // console.log(err); 
});

// line 13 log การใช้งาน new Promise ว่าใช้อะไรที่บรรทัดไหนบ้าง