// your must install "node.js" in your PC
// run  command  --> node setImmediate.js 

const baz = () => console.log('6th baz');
const foo = () => console.log('3rd foo');
const zoo = () => console.log('5th zoo');

const start = () => {
  console.log('1st start');
  setImmediate(baz);

  new Promise((resolve, reject) => {
    resolve('4th resolve bar'); // set resolve
  }).then(resolve => {
    console.log(resolve);
    process.nextTick(zoo);
  });

  process.nextTick(foo);
};

start();// call fn
console.log('2nd ----');

// Output
//
// start
// ----
// foo
// resolve bar
// zoo
// baz