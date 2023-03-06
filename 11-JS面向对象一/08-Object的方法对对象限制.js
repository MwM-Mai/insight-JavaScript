var obj = {
  name: 'why',
  age: 18
}

// 1. 禁止对象添加新的属性
Object.preventExtensions(obj)

obj.height = 1.88
obj.address = '广州市'

console.log(obj);


// 2. 禁止对象配置/删除属性

// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     writable: true,
//     configurable: false,
//     enumerable: true,
//     value: obj[key]
//   })
// }

Object.seal(obj)

delete obj.name
console.log(obj.name);



// 3. 让属性无法修改
// for (var key in obj) {
//   Object.defineProperty(obj, key, {
//     writable: false,
//     configurable: true,
//     enumerable: true,
//     value: obj[key]
//   })
// }

Object.freeze(obj)

obj.name = 'james'
console.log(obj.name);