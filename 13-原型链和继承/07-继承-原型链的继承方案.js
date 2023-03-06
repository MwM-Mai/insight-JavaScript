// 父类: 公共的属性和方法
function Person() { 
  this.name = 'why',
  this.age = 18,
  this.friends = []  
}

Person.prototype.eating = function () {
  console.log(this.name + 'eating');
}

// 子类: 特有的属性和方法
function Student() {
  this.sno = 1111
}

var p = new Person()
Student.prototype = p

Student.prototype.studying = function () {
  console.log(this.name + 'studying');
}

var student = new Student()

console.log(student.name);
student.studying()


// 原型链实现继承的弊端
// 第一个弊端 打印 student 对象， 继承的属性是看不见的

// name/age(从p实例对象继承过来的) 属性是看不见的
console.log(student);


// 第二个弊端 常见两个stu对象的时候 , 他们的属性 不是相互独立的 
var stu1 = new Student()
var stu2 = new Student()

// 直接修改对象上面的属性，是跟本对象添加了一个新的属性(给stu1添加name属性)
stu1.name = 'james'


// 获取引用， 修改引用中的值，会相互影响
stu1.friends.push('james')

console.log(stu1.friends);
console.log(stu2.friends);

// 第三个弊端 前面实现的过程中都没有传递参数