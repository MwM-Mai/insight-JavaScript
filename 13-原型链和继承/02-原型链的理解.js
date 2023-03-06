var obj = {
  name: 'why',
  age: 18
}

// 触发[[getter]]操作
// 1. 在对象中查找是否有address属性 没有执行第二步
// 2. 通过原型链 prorotype 往上查找 Object.prototype 是否有address属性 没有执行第三步
// 3. 最终找到 null 没有 address 属性 返回undefined
console.log(obj.address);