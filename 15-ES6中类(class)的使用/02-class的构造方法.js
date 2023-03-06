// 类的声明

class Person {
  // 类的构造方法
  // 注意: 一个类只能有一个构造函数(方法)
  // new 做了什么 
  // 1. 在内存中创建一个对象
  // 2. 将 类的原型 显示原型 prototype 赋值给 对象的隐式原型([[prototype]])
  // 3. 构造函数的 this 指向 创建出来的对象 this = p (将对象赋值给函数的 this)
  // 4. 执行代码块
  // 5. 自动返回 创建出来的对象
  
  constructor (name, age) {
    this.name = name
    this.age = age
  }
}

var p1 = new Person('why', 18)
var p2 = new Person('james', 39) 
console.log(p1);
console.log(p2);