// 传统的面向对象多态有三个前提
// 1、 必须有继承(多态的前提)
// 2、 必须有重写(子类重写父类的方法)
// 3、 必须有父类的引用指向子类的对象


// Shape 形状
class Shape {
  getShape() {
    
  }
}

class Rectangle extends Shape {
  // 重写方法
  getShape() {
    return 100
  }
}

class Cricle extends Shape {
  // 重写方法
  getShape() {
    return 200
  }
}

var r = new Rectangle()   // 相当于 var shape: Shape = new Rectangle()   其中 shape: Shape 为父类的引用   new Rectangle() 为 子类的对象
var c = new Cricle()


// 多态： 当不同的数据类型执行同一个操作时，如果表现出来的形态(行为)不一样 ，那么就是多态的体现
// shape: Shape 为 TypeScript 的对参数的类型限制 限制为 Shape类型  Cricle/Rectangle 继承了Shape类型 所以可以传参
function calcArea(shape: Shape) {
  console.log(shape);
}

calcArea(r)
calcArea(c)



export{}