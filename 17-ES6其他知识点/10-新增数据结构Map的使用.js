// 1. Javascript 中对象是不能使用对象作为 key
const obj = {
  name: 'why'
}

const obj2 = {
  name: 'james'
}

// const info = {
//   [obj]: 'aaa',
//   [obj2]: 'bbb'
// }

// console.log(info);

// 2. Map 允许对象类型作为 key
// 无论是在 设置属性 前打印还是设置后打印 都会打印出设置都的所有属性
const map = new Map()
map.set(obj, 'aaa')
map.set(obj2, 'aaa')
map.set('1', 'ccc')
console.log(map);

// map也可以存放数组 但是有要求 [[key, value], [key, value], [key, value]]
const map2 = new Map([['11', 123], ['22', 456]])
console.log(map2);


// Map 常见的属性和方法
console.log(map2.size);

// set() 方法 设置属性的方法


// get() 方法 获取属性的方法


// has() 方法 判断是否有该属性的方法

// delete() 方法 删除属性的方法

// clear() 方法 清除属性的方法

// forEach()/for(of) 方法 遍历