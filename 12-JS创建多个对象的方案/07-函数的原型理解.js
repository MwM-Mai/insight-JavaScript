function foo() {

}



// 函数也是一个对象
// 隐式原型的产生 其实就是 new Function()
console.log(foo.__proto__);  // 函数作为对象来说，它也是有 [[prototype]] 隐式原型


// 函数因为是一个函数，所有多出来一个 显示原型属性: prototype
console.log(foo.prototype);

var fn1 = new foo()
var fn2 = new foo()


console.log(fn1.__proto__ === foo.prototype);
console.log(fn2.__proto__ === foo.prototype);