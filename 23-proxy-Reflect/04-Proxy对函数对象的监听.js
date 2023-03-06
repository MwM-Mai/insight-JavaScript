function foo() {

}

const fooProxy = new Proxy(foo, {
  // thisArg: 绑定的this
  // 监听 apply 调用的 过程
  apply(target, thisArg, argArray) {
    console.log('对foo函数进行了apply操作');
    target.apply(thisArg, argArray)
  },
  // 监听 new 调用的 过程
  construct(target, argArray, newTarget) {
    console.log('对foo函数进行了new的调用');
    return new target(...argArray)
  }
}) 


fooProxy.apply({})
new fooProxy('a', 'b')