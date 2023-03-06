async function foo() {
  console.log('foo function start');

  console.log('中间代码');

  // 如果是普通函数 抛出异常 后续代码不会执行
  // 如果是异步函数 抛出异常 会作为 promise 的 reject 方法的值 返回出去
  throw new Error('error message')

  console.log('foo function end');

}

foo().catch(res => {
  console.log(res);
})

console.log('后续的代码----');