// 导入方式一 普通的导入

// import { name, age, foo } from "./foo.js"
// import { fName, fAge, fFoo } from "./foo.js"


// 导入方式二 起别名

// import { name as fName, age as fAge, foo as fFoo } from "./foo.js"


// 导入方式三：可以将导出的所有内容放到一个标识符中
import * as foo from './foo.js'



// console.log(name, age);
// console.log(fName, fAge);
console.log(foo.name, foo.age);

// foo()
// fFoo()
foo.foo()



