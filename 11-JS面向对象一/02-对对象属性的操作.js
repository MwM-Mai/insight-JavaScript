var obj = {
  name: 'why', 
  age: 18
}

// 获取属性
console.log(obj.name);

// 给属性赋值
obj.name = 'james'
console.log(obj.name);

// 删除属性
delete obj.name
console.log(obj);

// 需求： 对属性进行操作时， 进行一些限制
// 限制： 不允许某一个属性被赋值/不允许某个属性被删除/不允许某个属性被遍历

// 属性描述符
Object.defineProperty(obj, 'name', {
  writable: false
})