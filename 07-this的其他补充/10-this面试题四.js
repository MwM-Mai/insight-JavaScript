var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()()  // window (独立函数执行)
person1.obj.foo1.call(person2)()  // window (独立函数执行)
person1.obj.foo1().call(person2)  // person2 (显示绑定)

person1.obj.foo2()()  // obj (this的上层作用域)
person1.obj.foo2.call(person2)()  // person2 (显示绑定this指向 person2 返回结果 再指向 箭头函数this指向上层作用域)
person1.obj.foo2().call(person2)  // obj (this的上层作用域)
