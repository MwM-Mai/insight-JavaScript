function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address
  this.eating = function() {
    console.log(this.name + '在吃东西');  
  }
  this.running = function () {
    console.log(this.name + '在跑步');
  }
    
}

var p1 = new Person('张三', 18, 1.88, '广州市')
var p2 = new Person('李四', 20, 1.98, '北京市')
var p3 = new Person('王五', 23, 1.78, '上海市')
console.log(p1);
console.log(p1.__proto__.constructor.name);

console.log(p1.eating === p2.eating);
console.log(p1.running === p2.running);