var names =['abc', 'cba', 'nba', 'aaa']

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    this._address = '广州市'
  }
  running() {
    console.log('runing');
  }

  // 类的访问器方法
  get address() {
    console.log('get');
    return this._address
  }
  set address(value) {
    console.log('set');
    this._address = value
  }

  // 类的静态方法(类方法)
  // Person.createPerson() 可以直接调用
  static randomPerson() {
    // Math.floor()  方法 向下取整
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

var p1 = new Person('why', 18)
var p2 = new Person('james', 39) 
console.log(p1);
console.log(p2);
p1.running()

p1.address = '北京市'

var p3 = Person.randomPerson()
console.log(p3);