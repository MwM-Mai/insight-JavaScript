// 箭头函数在被执行之前的this就被赋值 固定绑定 无法更改

var name = 'window' 
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1();   // person1 (隐式绑定)
person1.foo1.call(person2);  // person2 (显示绑定)

// var 声明对象是没有作用域的 ！！！

person1.foo2();  // window (不绑定作用域，上层作用域是window)
person1.foo2.call(person2);  // window (不绑定作用域，上层作用域是window)

person1.foo3()();  // window (独立函数调用)
person1.foo3.call(person2)(); // window  person1.foo3.call(person2) this指向 person2 拿到返回值后再调用(独立函数调用)
person1.foo3().call(person2);  // person2 (最终调用返回函数式，使用的式显示绑定)

person1.foo4()();  // person1 (箭头函数不绑定this，this指向上层作用域 person1)
person1.foo4.call(person2)(); // person2 (箭头函数不绑定this，显示绑定this指向了 person2 拿到返回值后再调用 this指向上层作用域 person2)
person1.foo4().call(person2); // person1 (箭头函数不绑定this，this指向上层作用域 person1)