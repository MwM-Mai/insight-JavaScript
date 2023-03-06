function foo(num1, num2) {
  // console.log(arguments);

  // 1. 自己遍历
  var newArr = []
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]  * 10)
  }
  console.log(newArr);

  // 2. arguments转成array类型
  // 2.1 自己遍历arguments中所有元素
 
  // 2.2 通过 数组原型来调用数组方法 显示绑定修改 this 指向 通过 Array.prototype.slice 遍历 arguments 创建新的数组
  // slice 方法选择从给定的 start 参数开始的元素，并在给定的 end 参数处结束，但不包括
  var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2);
  var newArr3 = [].slice.call(arguments)
  console.log(newArr3);

  // 2.3 ES6的语法 Array.from() 方法 遍历数组/类数组 返回一个新的数组
  var newArr4 = Array.from(arguments)
  console.log(newArr4);

  
  var newArr5 = [...arguments].map(item => item *10)
  console.log(newArr5);
}

foo(10, 20, 30, 40, 50)


// 额外补充知识点 Array中的slice实现


// Array.prototype.slice 通过原型调用数组的方法
// Array.prototype.slice执行过程

// Array.prototype.hyslice = function (start = 0, end) {
//   // console.log(this);
//   var arr = this
//   end = end || arr.length
//   var newArr = []
//   for (var i = start; i < end; i++) {
//     newArr.push(arr[i])
//   }
//   return newArr
// }


// var newArr = Array.prototype.hyslice.call(['aaa', 'bbb', 'ccc', 'ddd'])
// console.log(newArr);
