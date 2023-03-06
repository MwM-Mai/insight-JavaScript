// 在 JS 中迭代器也是一个具体对象 这个迭代器需要符合迭代器的协议
// 在 JS 中迭代器的标准有一个特定的 next() 方法

// 以下要求
// next() 方法是一个无参数函数或者一个参数, 返回一个 应当拥有两个属性的 对象
// 1> done属性(boolea)
//    如果迭代器可以产生序列中的下一个值 则为 false
//    如果迭代器迭代完毕 则为 true

// 2> value 迭代器返回的任何一个JS值 done为true时可省略

// 编写的一个迭代器对象
// const iterator = {
//   next() {
//     return { done: true, value: 123 }
//   }
// }


// 数组
const names = ['abc', 'cba', 'nba']

// 创建一个迭代器对象来访问数组
let index = 0
const namesIterator = {
  next() {
    // return { done: false, value: 'abc' }
    // return { done: false, value: 'cba' }
    // return { done: false, value: 'nba' }
    // return { done: true, value: undefined }
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());   // { done: false, value: 'nba' }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());   // { done: true, value: undefined }
console.log(namesIterator.next());
console.log(namesIterator.next());