function* foo(num) {
  console.log('函数执行开始');

  const value1 = 100 * num
  console.log('开始执行第一段代码', value1);

  const n = yield value1 * 10

  // return n

  const value2 = 200 * n
  console.log('开始执行第二段代码', value1);
  const count = yield value2

  const value3 = 300 * count
  console.log('开始执行第三段代码', value1);
  yield value3

  console.log('函数执行结束');
  return 123
}

const generator = foo(5)
console.log(generator.next());

// 第二段代码执行
// 使用 return() 那么就意味着相当于在第一段代码的后面加上 return 就会提前终止生成器代码的继续执行
console.log(generator.return(20));


console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
