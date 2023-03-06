
//  instanceOf 用于判断构造函数的 prototype 是否出现在某一个实例对象的原型链上

// 继承
function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, 'constructor', {
    enumerable: false,
    value: SubType,
    configurable: true,
    writable: true
  })
  
}

function Person() {

}

function Student() {

}

inheritPrototype(Student, Person)

var stu = new Student()

//  instanceOf 用于判断构造函数的 prototype 是否出现在某一个实例对象的原型链上

console.log(stu instanceof Student);
console.log(stu instanceof Person);
console.log(stu instanceof Object);