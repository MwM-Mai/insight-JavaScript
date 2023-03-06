// name/age 虽然没有使用属性描述符来定义, 但是他们具有对应特性的
// value: 赋值的value
// configurable: ture
// enumerable: true
// writable: true
var obj = {
  name: 'why', 
  age: 18
}

// 数据属性描述符 configurable(是否可配置 删除/修改 默认值 false)  enumerable(是否枚举 默认值 false) writable(是否能赋值 默认值 false)
Object.defineProperty(obj, 'address', {
  // 很多配置
  value: '北京市',   // 默认值 undefined
  // 是否 删除/修改
  configurable: true,
  // 是否枚举
  enumerable: true,
  // 是否能赋值
  writable: true
  
})

console.log(obj);
console.log(obj.address);

// 测试 configurable 属性的作用
// Object.defineProperty(obj, 'address', {
//   // 很多配置
//   value: '深圳市',
//   // 不可删除/修改
//   configurable: true,
  
// })
// console.log(obj.address);



// 测试 configurable 属性
// for (key in obj) {
//   console.log(key);
// }


// 测试 writable 属性
obj.address = '广州市'
console.log(obj.address);


