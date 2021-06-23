//第一种暴露方式： module.xxxx = value
module.exports = {
    data:'nihaowa',
    test(){
        console.log(this.data)
    }
}