/*分别暴露*/

export let data = 'hello'

export function demo1(){
    console.log('我是模块一的demo函数',data.toUpperCase())
}

export function test1(){
    console.log('我是模块一的test函数',data.toLowerCase())
}