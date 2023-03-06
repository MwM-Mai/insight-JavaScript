//  ES6 的块级作用域 对 var 声明的变量无效

// 对let/const/function/class声明的类型是 有效
{
  let foo = 'foo'
  function bar() {
    console.log('bar');
  }
  class Person {}
}

// console.log(foo);
// console.log(new Person());

// 不同的浏览器有不同的实现(大部分浏览器为了兼容以前的代码， 让我们的 function 是 没有块级作用域 的)
bar()