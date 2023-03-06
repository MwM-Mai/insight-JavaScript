
// isPrototypeOf 用于判断 某个对象 是否出现在 某个实例对象的原型链上


function Person() {

}

var p = new Person()

console.log(Person.prototype.isPrototypeOf(p));   // Person.prototype 有没有出现在 p 对象上面



// instanceof 和 isPrototypeOf 的区别

// instanceof 判断 构造函数 有没有出现在 某个实例对象的原型链上(传的是构造函数)

// isPrototypeOf 判断 对象 是否出现在 某个实例对象的原型链上(传的是对象)
