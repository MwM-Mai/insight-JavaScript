var obj1 = {}  // 创建一个对象
// obj 创建对象 是 obj2 创建对象 的语法糖
var obj2 = new Object()  // 创建一个对象
// obj2.__proto__ === Object.prototype
// Object.__proto__ === null

function Person() {

}

var p = new Person()


