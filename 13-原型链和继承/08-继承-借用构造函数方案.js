// 父类: 公共的属性和方法
function Person(name, age, firends) { 
  // this 指向的是 student实例对象
  this.name = name
  this.age = age
  this.friends = firends  
}

Person.prototype.eating = function () {
  console.log(this.name + 'eating');
}

// 子类: 特有的属性和方法
function Student(name, age, firends, sno) {

  Person.call(this, name, age, firends)  // this 指向的是 student实例对象

  this.sno = sno
}

var p = new Person()
Student.prototype = p

Student.prototype.studying = function () {
  console.log(this.name + 'studying');
}

var student = new Student('张三', 18, ['james'], 111)

console.log(student.name);
student.studying()


// 原型链实现 继承的弊端(通过借用构造函数的方案 解决弊端) 
// 第一个弊端 打印 student 对象， 继承的属性是看不见的

// name/age(从p实例对象继承过来的) 属性是看不见的
console.log(student);


// 第二个弊端 常见两个stu对象的时候 , 他们的属性 不是相互独立的 
var stu1 = new Student('李四', 20, ['刘德华'], 123)
var stu2 = new Student('王五', 23, ['周星驰'], 456)
console.log(stu1);
console.log(stu2);

// 直接修改对象上面的属性，是跟本对象添加了一个新的属性(给stu1添加name属性)
// stu1.name = 'james'


// 获取引用， 修改引用中的值，会相互影响
stu1.friends.push('james')

console.log(stu1.friends);
console.log(stu2.friends);

// 第三个弊端 前面实现的过程中都没有传递参数




// 强调 ！！！
// 借用构造函数方案继承也是有弊端的   两个弊端

// 第一个弊端 Person函数至少被调用了两次



// 第二个弊端 student原型对象上多出一些属性, 但是一些属性没有存在的必要的(Person的p实例对象 的 name, age, firends均为undefined)