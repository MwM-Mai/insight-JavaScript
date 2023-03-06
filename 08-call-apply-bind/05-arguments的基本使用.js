// arguments是一个对于传递函数参数的类数组(array-like)对象
// arguments不是数组类型,而是一个对象类型
//  !!! 但是arguments 有数组的特性 比如 length/index
//  !!! 但是arguments 没有数组中的方法 比如 forEach/map

var ao = {
  num1: undefined,
  num2: undefined,
  num3: undefined,
  arguments: {}
}

function foo(num1, num2, num3) {
  //调用函数时 会把剩余的参数结合前面的参数放到一个 类数组对象中(长得像数组,但是本质是一个对象): arguments

  // arguments 是放在 vo: ao 里面
  console.log(arguments);

  // 常见的arguments操作有 三个
  // 1. 获取参数的长度
  console.log(arguments.length);

  // 2. 根据索引值获取某一个参数
  console.log(arguments[1]);

  // 3. callee 获取当前arguments所在的函数
  console.log(arguments.callee);

  // console.log(num1, num2, num3);
}

foo(10, 20, 30, 40, 50)