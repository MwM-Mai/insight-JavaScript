function* foo() {
  console.log('代码开始执行');
  const value1 = 100

  try {
    yield value1
  } catch (err) {
    console.log(err);
  }   // 如果没有捕获异常 catch() {} 那么就会终止掉 不会执行下面的代码


  console.log('第二段代码继续执行');
  const value2 = 200
  yield value2

  const value3 = 300
  yield value3

  console.log('代码执行结束');
}

const generator = foo()
console.log(generator.next());

console.log(generator.throw('yield value1 err'));    // 相当于 第一个 yield value1 发生了异常 
