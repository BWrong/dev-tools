// import '@babel/polyfill';
// 1. 语法转换
let a = () => {
  let msg = 'hello babel'
  console.log(msg)
}

class Foo {
  method() {}
}

// 2. polyfill
let include = [1,2,3].includes(1);
new Promise((resolve, reject) => {
    resolve();
});
