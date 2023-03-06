function add(x, y, z) {
  return x + y + z
}

var reslut = add(10, 20, 30)
console.log(reslut);

// 柯里化过程
function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}

var reslut2 = sum(10)(20)(30)
console.log(reslut2);

// 简化柯里化代码
var sum2 = x => y => z => x + y + z
console.log(sum2(10)(20)(30));