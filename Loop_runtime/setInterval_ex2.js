// run -> node Loop_runtime/setInterval_ex2.js

const intervalID = setInterval(myCallback, 1000, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b); 
  console.log('----------');
}