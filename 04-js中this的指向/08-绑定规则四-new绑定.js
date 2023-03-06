// 我们通过一个new关键字调用一个函数时(构造器)，这个时候this是在这个构造器时创建出来的对象
// this = 创建出来的对象
// 这个绑定过程就是new绑定

function Person(name, age) {
  this.name = name
  this.age = age

  // return this(对象)

}

var p = new Person('why', 18)     // p就相当于 返回的this这个对象
console.log(p.name , p.age);
var p2 = new Person('kobe', 40)

// 构造函数在调用时 会在 function 内部生成一个新的对象
// 把生成的对象赋值给this 最后返回this
// var obj = {
  
// }