function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

console.log(add(10, 20, 30));

// 单一职责原则(每个函数处理的问题尽可能单一)
function sum(x) {
  x = x + 2
  return function (y) {
    y = y * 2
    return function (z) {
      z = z * z
      return x + y + z
    }
  }
}
console.log(sum(10)(20)(30));