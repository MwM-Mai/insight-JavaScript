async function foo() {
  console.log('foo function start');

  console.log('中间代码');

  console.log('foo function end');

  // return undefined
}

// 异步函数的返回值一定是一个Promise
const promise = foo()
// 等promise 有返回值 再执行 then 方法 上面返回值 为默认返回值 
promise.then(res => {
  console.log('promise then function exec');
})