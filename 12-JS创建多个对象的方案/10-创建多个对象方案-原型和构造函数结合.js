function Person(name, age, height, address) {
  this.age = age
  this.height = height
  this.address = address
  this.name = name
}

var fn1 = new Person('张三', 18, 1.88, '北京市')
var fn2 = new Person('李四', 20, 1.98, '广州市')
var fn3 = new Person('王五', 23, 1.78, '上海市')

Person.prototype.eating = function () {
  console.log(this.name + '在吃东西');
}

Person.prototype.running = function () {
  console.log(this.name + '在跑步');
}

fn1.eating()