const name = 'why'
const age = 18

function sum(num1, num2) {
  return num1 + num2
}


// 源码
// module.exports = {}
// exports = module.exports


// 第二种导出方式
exports.name = name
exports.age = age
exports.sum = sum

// 报错  因为 exposts 和 module.exports 指向的已经不是同一个对象了
// exports = {
//   name,
//   age
// }




// 注意   最终能导出的一定是 module.exports