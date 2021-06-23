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
