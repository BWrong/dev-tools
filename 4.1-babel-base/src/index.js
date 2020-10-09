// let a = () => {
//   let msg = 'hello babel'
//   console.log(msg)
// }
// polyfill

import '@babel/polyfill';
let include = [1,2,3].includes(1);
new Promise((resolve, reject) => {
    resolve();
});

class Foo {
  method() {}
}