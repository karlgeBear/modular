(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
1.主文件，用于汇总各个模块。
2.注意：引入模块：
        1.如果引入的第三方模块，则直接写模块名。
        2.如果引入的是自定义模块，必须写路径。
3.同步加载模块，适合服务器端（必须得有顺序）。
*/

let module1 = require('./module1')
let {data,test} = require('./module1') //引入的同时，结构赋值
let module2 = require('./module2')
let module3 = require('./module3')
let uniq = require('uniq')
console.log(module1)
//如何使用一个模块取决于：模块暴露的是什么
console.log(module1.data);
module1.test();
module2.haha();
module3();
console.log(uniq([5,6,4,256,455,14,3,2,5,45,1])); //字典排序
console.log(data);
test();
/*
//验证内置关系
console.log(module.exports === exports) //true
console.log(module.exports) //{}
console.log(exports) //{}*/

},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
//第一种暴露方式： module.xxxx = value
module.exports = {
    data:'nihaowa,前端学习',
    test(){
        console.log(this.data)
    }
}
},{}],3:[function(require,module,exports){
//第二种暴露的方式 exports.xxx = value

exports.haha = function () {
    console.log('我是module2的一个函数')
}
},{}],4:[function(require,module,exports){
//在CommonJs模块规范钟，module.exports 和 exports 不能混用。
//如果混用，以module.exports为主
//exports只不过是module.exports简化的一种方式

exports.arr = [1,2,3,4,5]

module.exports = function haha() {
    console.log('哈哈')
}

//问题：暴露得本质到底是什么？module.exports所指向得那个对象
//    node给了你一个空对象，module.exports = function(){}把那对象废了，自己开了一个对象
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
