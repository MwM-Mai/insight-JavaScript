// 我们每个对象中都有一个 [[prototypr]] 属性 这个属性可以称之为对象的原型(隐式原型)


var obj = {}  // 隐藏属性 [[prototypr]] 对象原型

// 1. 解释原型的概念和看一下原型

// 早期的ECMA是没有规范如何查看[[prototype]]

// 给对象提供一个属性，可以让我们查看一下这个原型对象(浏览器提供的)
// __proto__
console.log(obj.__proto__);

// ECMA5 提供一个方法可以获取到原型对象
console.log(Object.getPrototypeOf(obj));




// 2. 原型的作用
// 当我们从某个对象中获取属性时， 他会触发[[gett]]操作 (分两步操作)
// 1. 在当前对象中查找属性 如果找到直接使用
// 2. 如果找不到延着原型链查找  prototype 查找 原型链上没有 打印 undefined

// obj.age = 18
// obj.__proto__.age = 18
Object.getPrototypeOf(obj).age = 18
console.log(obj.age);

