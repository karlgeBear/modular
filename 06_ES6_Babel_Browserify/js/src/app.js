/*主文件，用于汇总js文件*/

//在es6模块化中，用哪一种方式引入，取决于用哪一种方式暴露

//引入module1:分别暴露
import {data,demo1, test1} from './module1'
//将modules暴露的内容,收集成一个对象[通用写法]
//import * as haha1 from './module1'

//引入module2:统一暴露
import {demo2,test2} from './module2'
//import * as haha2 from './module2'

//引入module3:默认暴露
import module3 from "./module3"

//引入module4:混合暴露
import module4,{arr0,bar,foo,str,student,d1} from './module4'

//引入第三方模块uniq，几乎所有的第三方模块，都用默认暴露的方式
import uniq from 'uniq'

console.log(data)
demo1()
test1()
demo2()
test2()
//haha1()
//haha2()
console.log(module3.name)
console.log(module3.age)
module3.speak()

console.log(arr0)
bar()
foo()
console.log(str)
console.log(student)
d1.run()
console.log(module4.school)