'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*默认暴露:export default(只能暴露一次)*/

exports.default = {
    name: 'hah',
    age: 18,
    speak: function speak() {
        console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + this.age);
    }
};