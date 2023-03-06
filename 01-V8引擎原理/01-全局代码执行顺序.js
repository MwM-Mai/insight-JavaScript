var name = "why";
console.log(num1);   // 变量提升 因为再代码被解析时 创建的 globalObject 的 num1 属性 未执行全局上下文 所以是undefined

var num1 = 20
var num2 = 30
var result = num1 + num2

console.log(window);


/*
  1. 代码被解析，V8引擎内部会帮我们创建一个对象 globalObject{} 在编译的过程中确定有那些变量 name 这些属性放到 对象里面 由于未执行全局上下文 所以是undefined
  2. 运行代码
    2.1 V8为了执行代码， V8引擎内部会有一个执行上下文栈(Execution Context Stack 简写 ECStack)（函数调用栈）
    2.2 因为我们执行的是全局代码， 为了全局代码能够正常执行，需要创建 全局执行上下文(Global Execution Context 简称 GEC)(全局代码需要被执行时才会创建)  
*/

// var globalObject = {
//   String: '类',
//   Date: "类",
//   setTimeout: '函数',
//   window: globalObject,
//   name: undefined,
//   num1: undefined,
//   num2: undefined,
//   result: undefined
// }


// console.log(window.window.window.window);