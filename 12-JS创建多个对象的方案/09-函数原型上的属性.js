function foo() {

}


// 1. constructor 属性
console.log(foo.prototype);
// foo.prototype 有一个 constructor 属性


console.log(foo.prototype.constructor);
// constructor 指向的是 构造函数本身

// console.log(Object.getOwnPropertyDescriptors(foo));



// 2. 我们也可以添加自己的属性

foo.prototype.name = 'why'
foo.prototype.age = 18

var fn = new foo()
console.log(fn.name);


// 3. 重新修改整个 prototype 对象

foo.prototype = {
  // constructor: foo,
  name: 'james',
  age: 39,
  height: 2.08
}


var fn1 = new foo()

console.log(fn1.name);


// 在真实开发中我们可以通过Object.defineProperty() 添加 因为默认的 constructor 是不可枚举的 
Object.defineProperty(foo.prototype, 'constructor', {
  value: foo,
  enumerable: false,
  writable: true,
  configurable: true
})