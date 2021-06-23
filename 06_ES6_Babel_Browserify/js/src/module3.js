/*默认暴露:export default(只能暴露一次)*/

export default {
    name : 'hah',
    age : 18,
    speak(){
        console.log(`我的名字是${this.name},我的年龄是${this.age}`)
    }
}