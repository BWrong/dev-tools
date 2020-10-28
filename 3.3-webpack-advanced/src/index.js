import './assets/style.css';
import './assets/style.less'
import {cube} from './math'
import dayjs from 'dayjs'
import Vue from 'vue'
// import $ from 'jquery'
console.log('hello webpack');
let a = 2;
console.log(a)
console.log(cube(a))

console.log(dayjs().format('YYYY-MM-DD'))

document.getElementById('btn').onclick = function() {
  import(/* webpackChunkName: "module" */ './module.js').then(fn => {
    console.log(fn)
      fn.default && fn.default();
  });
}
new Vue({
  data: {

  }
})