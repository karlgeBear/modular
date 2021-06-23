//在CommonJs模块规范钟，module.exports 和 exports 不能混用。
//如果混用，以module.exports为主
//exports只不过是module.exports简化的一种方式

exports.arr = [1,2,3,4,5]

module.exports = function haha() {
    console.log('哈哈')
}

//问题：暴露得本质到底是什么？module.exports所指向得那个对象
//    node给了你一个空对象，module.exports = function(){}把那对象废了，自己开了一个对象