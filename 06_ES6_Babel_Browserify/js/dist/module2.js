'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*统一暴露*/

//arr是私有数据，不去暴露
var arr = [2, 4, 6, 8];

function demo2() {
    console.log('我是模块一的demo函数', arr);
}

function test2() {
    console.log('我是模块一的test函数', arr);
}

//统一暴露（精简版写法）
exports.demo2 = demo2;
exports.test2 = test2;

//统一暴露（完整版写法）
/*
export {
    demo2 as haha1,
    test2 as haha2
}*/