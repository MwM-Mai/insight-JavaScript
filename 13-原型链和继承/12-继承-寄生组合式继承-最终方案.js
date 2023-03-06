// 继承
function inheritPrototype(SubType, SuperType) {
  // Students.prototype 创建新的对象 对象原型__proto__ 指向 Person.prototype
  SubType.prototype = Object.create(SuperType.prototype)   
  
  // Students.prototype 创建新的对象 没有 constructor 属性
  Object.defineProperty(SubType.prototype, 'constructor', {
    value: SubType,
    writable: true,
    configurable: true,
    enumerable: false
  })
}


function Person(name, age, friends) {
  this.name = name 
  this.age = age
  this.friends = friends
}

  Person.prototype.running = function () {
    console.log(this.name + 'running');
  }

  Person.prototype.eating = function () {
    console.log(this.name + 'eating');
  }

// 调用继承的封装函数
inheritPrototype(Students, Person)

function Students(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score =score
}

Students.prototype.studying = function () {
  console.log(this.name + 'studying');
}

var stu = new Students('张三', 18, ['james'], 111, '良好')
console.log(stu);
stu.studying()
stu.running()