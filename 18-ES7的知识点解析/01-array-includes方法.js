const arr = ['abc', 'cba', 'nba', 'aaa', NaN]

if (arr.indexOf('abc') !== -1) {
  console.log('arr包含abc元素');
}


// ES2016(ES7)
// Array.includes 方法 查询数组是否包含某个元素
// .includes(元素, 重第几个开始查询)
if (arr.includes('cba')) {
  console.log('arr包含cba元素');
}


// 区别
if (arr.indexOf(NaN) !== -1) {     // 不包含 NaN
  console.log('indexOf包含NAN');
}


if (arr.includes(NaN)) {
  console.log('includes包含NAN');
}