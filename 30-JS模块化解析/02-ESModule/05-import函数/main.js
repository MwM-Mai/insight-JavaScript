
// import { name, age, foo } from "./foo.js"

// improt函数返回的是promise  improt 函数可以使导入的代码异步执行 不会阻塞 下面的同步代码
import('./foo.js').then(res => {
  console.log(res.name);
})

console.log('improt函数返回的是promise  improt 函数可以使导入的代码异步执行 不会阻塞 下面的同步代码');

console.log('后续的代码都是不会运行的~ 想要等导入的文件解析完 拿到变量才运行~');


// ES11 新增特性

// meta属性本身也是一个对象: {url: "当前模块所在的路径"}
console.log(import.meta);



