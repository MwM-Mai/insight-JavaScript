var nums = [10, 5, 11, 100, 55]

var newNums = []

// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     newNums.push(nums[i])
//   }
// }

// console.log(newNums);

// 函数function：独立的function, 那么称之为函数
// 比如 function foo() {

// }

// 方法method：当我们的函数属于某一个对象时，我们称这个函数是这个对象的方法
// filter: 过滤
var newNums = nums.filter((item, index, arr) => item % 2 === 0)
console.log(newNums);

// map: 映射 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值 + - * /
var newNums2 = nums.map() 

// forEach: 迭代
var newNums3 = nums.forEach()

// reduce: 累加
var newNums4 = nums.reduce()

// find: 查询 
var newNums5 = nums.find()
