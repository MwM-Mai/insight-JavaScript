function createFnArray() {
  // 1024 * 1024 长度   fill() 方法填充
  var arr = new Array(1024 * 1024).fill(1)
  return function () {
    console.log(arr.length);
  }
}

// var arrayFn = createFnArray()
// arrayFn()

var arrayFns =[]
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    arrayFns.push(createFnArray()) 
  }, i * 100)
}

setTimeout(() => {
  // arrayFns = null
  // pop方法 删除最后一个项 shift删除第一项 slice抽取出的项作为新数组
  for (var i = 0; i < 50; i++) {
    setTimeout(() => {
    arrayFns.pop()
    }, 100 * i)
  }
}, 10000)