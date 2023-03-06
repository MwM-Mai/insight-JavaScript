// 当遇到yield 的时候 值 暂停执行
// 当遇到return 的时候生成器 停止执行

function* foo() {
  console.log('函数执行开始');

  const value1 = 100
  console.log('开始执行第一段代码', value1);
  // return value1
  yield value1 * 10

  const value2 = 100
  console.log('开始执行第二段代码', value1);
  yield value2

  const value3 = 100
  console.log('开始执行第三段代码', value1);
  yield value3

  console.log('函数执行结束');
  return 123
}

// generator 本质上是一个特殊的迭代器
const generator = foo()

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());