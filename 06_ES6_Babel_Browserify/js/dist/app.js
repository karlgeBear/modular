'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入module4:混合暴露

//将modules暴露的内容,收集成一个对象[通用写法]
//import * as haha1 from './module1'

//引入module2:统一暴露
console.log(_module.data);

//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式

//import * as haha2 from './module2'

//引入module3:默认暴露
/*主文件，用于汇总js文件*/

//在es6模块化中，用哪一种方式引入，取决于用哪一种方式暴露

//引入module1:分别暴露

(0, _module.demo1)();
(0, _module.test1)();
(0, _module2.demo2)();
(0, _module2.test2)();
//haha1()
//haha2()
console.log(_module4.default.name);
console.log(_module4.default.age);
_module4.default.speak();

console.log(_module5.arr0);
(0, _module5.bar)();
(0, _module5.foo)();
console.log(_module5.str);
console.log(_module5.student);
_module5.d1.run();
console.log(_module6.default.school);