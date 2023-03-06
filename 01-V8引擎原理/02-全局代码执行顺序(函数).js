var name = 'why'

foo(123)

function foo(num) {
  console.log(m);
  var m = 10
  var n = 20
  console.log("foo");
  console.log(name);
}



/*
  1. 如果在 GlobalObject{}(GO) 对象中解析到 函数 在函数执行之前 会创建 ActivationObject{}(AO) 对象
     会将函数 里面的变量提升到 AO对象里面 由于未执行全局上下文 所以是undefined
*/

// var ActivationObject = {
//   num: undefined,
//   m: undefined,
//   n: undefined
// }



/*
  1. 代码被解析，V8引擎内部会帮我们创建一个对象 globalObject{}(GO) 在编译的过程中确定有那些变量 name 这些属性放到 对象里面 由于未执行全局上下文 所以是undefined
  2. 运行代码
    2.1 V8为了执行代码， V8引擎内部会有一个执行上下文栈(Execution Context Stack 简写 ECStack)（函数调用栈）
    2.2 因为我们执行的是全局代码， 为了全局代码能够正常执行，需要创建 全局执行上下文(Global Execution Context 简称 GEC)(全局代码需要被执行时才会创建)  
*/

// 在编译的过程中 如果是普通的变量 是 undefined
// 如果是函数 js引擎会在内存理开辟 一块空间来存储函数 空间地址如 0xa00

// var globalObject = {
//   String: '类',
//   Date: "类",
//   setTimeout: '函数',
//   window: globalObject,
//   name: "why",
//   foo: 0xa00
// }