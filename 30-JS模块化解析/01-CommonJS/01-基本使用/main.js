// 使用另外一个模块导出的对象, 那么就要进行导入

const why = require('./why.js')

console.log(why.aaa);
console.log(why.sum(10, 20));