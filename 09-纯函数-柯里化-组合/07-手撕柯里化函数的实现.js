function add1(x, y, z) {
  return x + y + z
}

function add2(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

function makeAdder(count) {
  return function (num) {
    return count + num
  }
}

function log(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`);
}


// 柯里化函数的实现

function hyCurrying(fn) {
  return function curried(...args) {
    // 判断当前已经接收的参数个数，比较参数本身(fn)需要接收的参数是否已经一致

    // 当已经传入的参数 大于等于需要的参数时 就执行fn函数 
    if (args.length >= fn.length) {
      console.log(this);
      // fn(...args) 为了保证 调用 curried 函数的 this 和 fn 的this 一致
      return fn.call(this, ...args) // 这个 this 指的是 curried 的 this 而 curried 的 this  默认绑定 window
    } else {

      // 没有达到个数时 需要返回一个新的函数， 继续接收参数
      return function curried2(...args2) {
        // 接收参数后需要递归调用 curried 函数 判断接收参数个数 是否和 参数本身(fn) 需要接收的参数一致
        return curried.call(this, ...args, ...args2)
      }
    }
  }
}

var curryAdd = hyCurrying(add1)


console.log(curryAdd.call('aaa',10, 20, 30));
console.log(curryAdd(10, 20)(30));
console.log(curryAdd(10)(20)(30));




// foo.length 获取函数接收参数的个数
function foo(x, y, z, m) {

}

console.log(foo.length);