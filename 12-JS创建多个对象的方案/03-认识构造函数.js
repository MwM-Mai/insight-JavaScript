// *********
// new 做了什么
// 1. 在内存中创建一个新的对象
// 2. 给对象的原型（prototype）赋值给构造函数的原型对象（prototype）属性
// 3. 构造函数的this会指向创建出来的新对象
// 4. 开始执行函数体的内部代码
// 5. 最终会返回 创建出来的对象

function Foo() {
  console.log('foo函数被调用');
}

var fn = new Foo()
console.log(fn);
// 当我们通过new调用函数和普通调用函数到底有什么区别

