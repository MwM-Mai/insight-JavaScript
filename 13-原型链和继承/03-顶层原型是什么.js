var obj = {
  name: 'why',
  age: 18
}

console.log(obj.address);

// 到底找到哪一层对象之后会停止查找呢

console.log(obj.__proto__);   // 打印 obj.__proto__ ==> Object.prototype  
// 字面量对象obj的原型 [Object: null prototype] {}
// [Object: null prototype] {} 就是顶层的原型(Object.prototype)

console.log(obj.__proto__.__proto__);

// 找到 null 这层对象停止查找 没有返回 undefined