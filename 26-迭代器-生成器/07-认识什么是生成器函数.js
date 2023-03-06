function* foo() {
  console.log('函数执行开始');

  const value1 = 100
  console.log('开始执行第一段代码', value1);
  yield

  const value2 = 100
  console.log('开始执行第二段代码', value1);
  yield

  const value3 = 100
  console.log('开始执行第三段代码', value1);
  yield

  console.log('函数执行结束');
}

// 调用生成器函数时候， 会给我们返回一个 生成器对象 这个生成器对象 是一个特殊的迭代器
const generator = foo()

// 开始执行第一段代码 （第一个yield前面的代码）
generator.next()

// 开始执行第二段代码
generator.next()