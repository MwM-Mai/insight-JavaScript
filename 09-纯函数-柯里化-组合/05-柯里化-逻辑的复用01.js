function sum(m, n) {
  return m + n
}

// 假如在程序中，我们经常需要把 5 和 另外一个数字进行相加
// console.log(sum(5, 5));
// console.log(sum(5, 50));
// console.log(sum(5, 10));
// console.log(sum(5, 500));


// 柯里化的逻辑复用 可以使count进行复用
function makeAdder(count) {
  return function (num) {
    return count + num
  }
}

// var reslut = makeAdder(5)(10)
// console.log(reslut);

var adder5 = makeAdder(5)
adder5(10)
adder5(15)
adder5(20)
