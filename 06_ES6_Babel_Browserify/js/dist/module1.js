'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
/*分别暴露*/

var data = exports.data = 'hello';

function demo1() {
    console.log('我是模块一的demo函数', data.toUpperCase());
}

function test1() {
    console.log('我是模块一的test函数', data.toLowerCase());
}