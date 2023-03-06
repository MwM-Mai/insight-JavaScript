// 当遇到yield 的时候 值 暂停执行
// 当遇到return 的时候生成器 停止执行

function* foo(num) {
  console.log('函数执行开始');

  const value1 = 100 * num
  console.log('开始执行第一段代码', value1);
  // return value1
  const n = yield value1 * 10    // 用上一次的返回值 作为 第二段执行的参数 进行接收  yield value1 * 10 的返回值是 10 

  const value2 = 200 * n
  console.log('开始执行第二段代码', value1);
  const count = yield value2

  const value3 = 300 * count
  console.log('开始执行第三段代码', value1);
  yield value3

  console.log('函数执行结束');
  return 123
}

// 1. 生成器上的next方法可以传递参数
// 第一次执行 传参
const generator = foo(5)
console.log(generator.next());

// 第二次以后执行 传参
console.log(generator.next(10));
console.log(generator.next(20));
console.log(generator.next());


