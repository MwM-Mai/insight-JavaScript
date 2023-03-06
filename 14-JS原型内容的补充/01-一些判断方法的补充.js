var obj = {
  name: "why",
  age: 18
}

// Object.create() 可接收多个参数 第二个参数 是以属性描述符方式写的(Object.definepropetypis)
var info = Object.create(obj, {
  address: {
    value: '北京市',
    enumerable: true,
    configurable: true,
    writable: true
  }
})

console.log(info);
console.log(info.__proto__);

// hasOwnProperty 方法 判断某个属性是否在对象上
// console.log(info.hasOwnProperty('address'));
// console.log(info.hasOwnProperty('name'));


// in 操作符 不管在对象函数原型中 只要存在就返回 true

// console.log('address' in info);
// console.log('name' in info);

// for in
for (var key in info) {
  console.log(key);
}


