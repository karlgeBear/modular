//混合暴露

//分别暴露
export let arr0 = [2,4,6,8,10]
export function bar() {
    console.log('module4-----bar()')
}
export function foo() {
    console.log('module4-----foo()')
}

//统一暴露
let str = 'hello,nihao'
let student = {name:'heli',age:18}
class Dog {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    run(){
        console.log('我正在奔跑')
    }
}
let d1 = new Dog('wc',3)
export {str,student,d1}

//默认暴露
export default {
    school : 'jiuhe',
    price : 10
}